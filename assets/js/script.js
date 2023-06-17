let tmxStore = localforage.createInstance({
  name: "tmx"
});

let indexStore = localforage.createInstance({
  name: "index"
});

let currentFileName = "";
let tuList = [];
let documentIndex = undefined;
let currentPageIndex = 0;
let remoteFiles = [];

document.addEventListener("DOMContentLoaded",async function(){
  registerEvents();
  remoteFiles = await loadRemoteFilesList();
  loadFilesList();
  switchPage(0);
  parseParams();
})

window.addEventListener("popstate", (event) => {
  parseParams();
});

async function parseParams(){
  const filename = getURLParameter("filename");
  const keywords = getURLParameter("keywords");
  const nearBy = getURLParameter("nearBy");
  if (filename) {
    switchPage(1);
    await createIndexIfNeeded(filename);
    if (keywords) {
      document.getElementsByClassName("keywords")[0].value = keywords;
      search();
    }else if (nearBy) {
      switchPage(2);
      viewSegmentsNearBy(parseInt(nearBy));
    }else{
      document.getElementsByClassName("search-results")[0].innerHTML = "";
    }
  }else{
    switchPage(0);
  }
}

function getURLParameter(key) {
  let paramString = window.location.href.split('?')[1];
  let queryString = new URLSearchParams(paramString);
  for(let pair of queryString.entries()) {
    if (pair[0] === key) {
      return pair[1];
    }
  }
  return undefined;
}



function registerEvents(){
  document.getElementsByClassName("add-button")[0].addEventListener("click",function(){
    saveToIndexedDB();
  })
  document.getElementsByClassName("back-button")[0].addEventListener("click",function(){
    if (currentPageIndex === 1) {
      const newURL = window.location.origin + window.location.pathname;
      updateHistory(newURL);
      switchPage(0);
    }else{
      const keywords = document.getElementsByClassName("keywords")[0].value;
      const newURL = window.location.origin + window.location.pathname+"?filename="+encodeURIComponent(currentFileName)+"&keywords="+encodeURIComponent(keywords);
      updateHistory(newURL);
      switchPage(1);
    }
    window.scrollTo(0,0);

  })
  document.getElementsByClassName("search-button")[0].addEventListener("click",function(){
    search();
  })
  document.getElementsByClassName("delete-button")[0].addEventListener("click",function(){
    deleteCurrentFile();
  })
  document.getElementsByClassName("keywords")[0].addEventListener("keydown",async function(event){
    if (event.code === "Enter") {
      search();
    }
  });
}

function saveToIndexedDB(){
  let files = document.getElementById('file').files;
  if (files.length == 0) {
    return;
  }
  let file = files[0];
  let fileReader = new FileReader();
  fileReader.onload = async function(e){
    await tmxStore.setItem(file.name,e.target.result);
    loadFilesList();
    //createIndex(e.target.result,file.name);
  };
  fileReader.onerror = function () {
    console.warn('oops, something went wrong.');
  };
  fileReader.readAsText(file);
}

function downloadAndSaveToIndexedDB(filename){
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/'+filename);
    xhr.onreadystatechange = async function(){
      if(xhr.readyState === 4){
        await tmxStore.setItem(filename,xhr.responseText);
        resolve();
      }
    }
    xhr.onerror = function(){
      console.log("error");
      reject();
    }
    xhr.send();
  });
  
}

async function loadFilesList(){
  const keys = await tmxStore.keys();
  const filesList = document.getElementsByClassName("files-list")[0];
  filesList.innerHTML = "";
  for (const key of keys) {
    const item = buildFileItem(key);
    filesList.appendChild(item);
  }
  for (const filename of remoteFiles) {
    if (keys.indexOf(filename) === -1) {
      const item = buildFileItem(filename);
      filesList.appendChild(item);
    }
  }
}

function buildFileItem(filename){
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href="javascript:void(0);";
  link.innerText = filename;
  link.addEventListener("click",function(){
    const newURL = window.location.origin + window.location.pathname + "?filename=" + encodeURIComponent(filename);
    updateHistory(newURL);
    switchPage(1);
    createIndexIfNeeded(filename);
  })
  item.appendChild(link);
  return item;
}

function loadRemoteFilesList(){
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/TMXFilesList.json');
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        let files = JSON.parse(xhr.responseText);
        resolve(files);
      }
    }
    xhr.onerror = function(){
      console.log("error");
      reject();
    }
    xhr.send();
  });
}

function switchPage(index) {
  if (index === 0) {
    document.getElementsByClassName("home")[0].style.display = "";
    document.getElementsByClassName("search")[0].style.display = "none";
    document.getElementsByClassName("viewer")[0].style.display = "none";
    document.getElementsByClassName("back-button")[0].style.display = "none";
    document.getElementsByClassName("delete-button")[0].style.display = "none";
  }else if(index === 1) {
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementsByClassName("search")[0].style.display = "";
    document.getElementsByClassName("viewer")[0].style.display = "none";
    document.getElementsByClassName("back-button")[0].style.display = "";
    document.getElementsByClassName("delete-button")[0].style.display = "";
  }else{
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementsByClassName("search")[0].style.display = "none";
    document.getElementsByClassName("viewer")[0].style.display = "";
    document.getElementsByClassName("back-button")[0].style.display = "";
    document.getElementsByClassName("delete-button")[0].style.display = "none";
  }
  currentPageIndex = index;
}

async function createIndexIfNeeded(name){
  if (currentFileName != name) {
    let xml = await tmxStore.getItem(name);
    if (!xml) {
      updateStatus(localize("下载XML中……"));
      await downloadAndSaveToIndexedDB(name);
      xml = await tmxStore.getItem(name);
    }
    updateStatus(localize("解析XML中……"));
    await sleep(100);
    tuList = await parseXML(xml,name);
    updateStatus(localize("建立索引中……"));
    await sleep(100);
    createIndex();
    updateStatus("");
    currentFileName = name;
  }
}

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      resolve();
    },ms)
  });
}

function parseXML(xml){
  return new Promise(function (resolve, reject) {
    let parser = sax.parser();
    let transUnits = [];
    let tu = {};
    let tuStart = false;
    let tagName = "";
    let lang = "";
    let index = 0;
    parser.onerror = function (e) {
      // an error happened.
      console.log(e);
      reject(e);
    };
    parser.ontext = function (t) {
      // got some text.  t is the string of text.
      if (tuStart && tagName && t.trim()) {
        if (tagName === "SEG") {
          tu[lang] = t;
        }
        if (tagName === "NOTE") {
          tu[tagName] = t;
        }
      }
    };
    parser.onopentag = function (node) {
      // opened a tag.  node has "name" and "attributes"
      if (node.name === "TU") {
        if (tuStart) {
          transUnits.push(tu);
          index = index + 1;
          tu = {}; 
        }
        tuStart = true;
      }
      if (node.name === "TUV") {
        lang = node.attributes["XML:LANG"] ?? node.attributes["LANG"];
      }
      if (node.name === "NOTE" || node.name === "SEG") {
        tagName = node.name;
      }else{
        tagName = "";
      }
    };
    parser.onattribute = function (attr) {
      // an attribute.  attr has "name" and "value"
    };
    parser.onend = function () {
      // parser stream is done, and ready to have more stuff written to it.
      if (Object.keys(tu).length>0) {
        transUnits.push(tu);
        index = index + 1;
      }
      resolve(transUnits);
    };
    parser.write(xml).close();
  });
}

function createIndex(){
  if (tuList.length>0) {
    let keys = Object.keys(tuList[0]);
    loadSelectOptions(keys);
    documentIndex = new FlexSearch.Document({
      document: {
          id: "id",
          index: createIndexConfiguration(keys)
      }
    });
    for (let index = 0; index < tuList.length; index++) {
      const tu = tuList[index];
      documentIndex.add(index,tu);
    }
  }
}

function createIndexConfiguration(keys){
  let configs = []
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const config = {
      field: key,
      tokenize: "forward",
      encode: str => str.replace(/[:"“”：]/g, " ").replace(/\n/g, " ").replace(/([\u4e00-\u9fa5])/g, " $1 ").split(" ")
    }
    configs.push(config)
  }
  return configs;
}

function loadSelectOptions(keys){
  let select = document.getElementsByClassName("field-select")[0];
  for (let index = select.childNodes.length -1 ; index >= 0; index--) {
    const node = select.childNodes[index];
    if (index > 1) {
      select.removeChild(node)
    }
  }
  for (const key of keys) {
    let option = document.createElement("option");
    option.value = key;
    option.innerText = key;
    select.appendChild(option);
  }
}

function updateStatus(status){
  document.getElementsByClassName("status")[0].innerText = status;
}

function search(){
  const container = document.getElementsByClassName("search-results")[0];
  container.innerHTML = "";
  let keywords = document.getElementsByClassName("keywords")[0].value;
  let fields = createSearchFields();
  let results = documentIndex.search(keywords,fields);
  let count = 0;
  for (let i = 0; i < results.length; i++) {
    const fieldResult = results[i];
    for (let j = 0; j < fieldResult.result.length; j++) {
      const resultIndex = fieldResult.result[j];
      count = count + 1;
      const item = buildSearchResultItem(count,resultIndex,tuList[resultIndex]);
      container.appendChild(item);
    }
  }
  const newURL = window.location.origin + window.location.pathname + "?filename=" + encodeURIComponent(currentFileName) + "&keywords=" + encodeURIComponent(keywords);
  updateHistory(newURL);
}

function buildSearchResultItem(count,resultIndex,tu){
  const container = document.createElement("div");
  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = "javascript:void(0);";
  link.addEventListener("click",function(){
    const newURL = window.location.origin + window.location.pathname + "?filename=" + encodeURIComponent(currentFileName) + "&nearBy=" + encodeURIComponent(resultIndex);
    updateHistory(newURL);
    viewSegmentsNearBy(resultIndex);
  })
  link.innerText = count;
  title.appendChild(link);
  const text = document.createElement("div");
  const highlights = document.createElement("p");
  highlights.innerHTML = getHighlights(getContent(tu));
  text.appendChild(highlights);
  container.appendChild(title);
  container.appendChild(text);
  return container;
}

function getContent(tu){
  let content = "";
  const keys = Object.keys(tu);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    content = content + key.toLowerCase() + ": " + tu[key];
    if (index < keys.length - 1) {
      content = content + "<br/>";
    }
  }
  return content;
}

function getHighlights(content){
  const keywords = document.getElementsByClassName("keywords")[0].value;
  let context = content;
  const regexForContent = new RegExp(keywords, 'gi');
  // Replace content where regex matches
  context = context.replace(regexForContent, "<span class='hightlighted'>$&</span>");
  return context;
}

function createSearchFields(){
  let select = document.getElementsByClassName("field-select")[0];
  let fields = [];
  let options = select.getElementsByTagName("option");
  if (select.selectedIndex === 0) {
    for (let index = 1; index < options.length; index++) {
      const option = options[index];
      fields.push(option.value);
    }
  }else{
    fields.push(select.selectedOptions[0].value);
  }
  return fields;
}

function viewSegmentsNearBy(id){
  switchPage(2);
  const viewer = document.getElementsByClassName("viewer")[0];
  viewer.innerHTML = "";
  const beginIndex = Math.max(0, id - 7);
  const endIndex = Math.min(tuList.length - 1, id + 7);
  let count = 1;
  for (let index = beginIndex; index <= endIndex; index++) {
    const tu = tuList[index];
    const item = document.createElement("div");
    const title = document.createElement("h3");
    title.innerText = count;
    if (index === id) {
      title.id = "matched";
    }
    const content = document.createElement("p");
    content.innerHTML = getContent(tu);
    item.appendChild(title);
    item.appendChild(content);
    viewer.appendChild(item);
    count = count + 1;
  }
  window.scrollTo(document.getElementById("matched").offsetLeft,document.getElementById("matched").offsetTop);
}

function updateHistory(newURL){
  if (newURL != window.location.href) {
    history.pushState(null, null, newURL);
  }
}

async function deleteCurrentFile(){
  if (currentFileName) {
    await tmxStore.removeItem(currentFileName);
    const newURL = window.location.origin + window.location.pathname;
    updateHistory(newURL);
    loadFilesList();
    switchPage(0);
  }
}

function localize(str){
  if (window.location.pathname.indexOf("/zh") === -1) {
    let translations = {
      "下载XML中……":"Downloading XML...",
      "解析XML中……":"Parsing XML...",
      "建立索引中……":"Indexing..."
    }
    if (str in translations) {
      return translations[str];
    }
  }
  return str;
}

