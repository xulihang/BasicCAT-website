---
date: 2024-03-30 19:55:50+08:00
layout: post
title: 如何训练一个YOLOv8目标检测模型
categories: blog
tags: imagetrans
---

YOLOv8是最新的YOLO目标检测模型，推理还是训练都非常容易上手。

ImageTrans在2.10.0中加入了对YOLOv8模型的支持，可以利用Java调用OpenCV的DNN模块进行目标检测，并且提供了目标检测标注数据管理器，可以将ImageTrans项目导出为YOLO格式的训练数据集或者从数据集导入到ImageTrans项目，方便根据需求自己训练模型。

下面是具体的操作步骤：

1. 打开一个ImageTrans项目，利用自动或手动方式完成对图片中目标（主要是文字区域）的定位。
2. 通过菜单-工具，打开目标检测标注数据管理器。
3. 导出数据到一个目录。数据会以YOLO格式，按以下结构存储。

   ```
   ├─images
   │  ├─train
   │  │      image1.jpg
   │  │      image2.jpg
   │  │
   │  └─val
   │         image3.jpg
   │         image4.jpg
   │
   ├─labels
   │  │
   │  ├─train
   │  │      image1.txt
   │  │      image2.txt
   │  │
   │  └─val
   │         image3.txt
   │         image4.txt
   │
   ├─balloon.yaml
   ```

4. 安装Python，并根据YOLOv8的[文档](https://docs.ultralytics.com/)安装yolo。
5. 在导出的数据的目录下，新建一个`train.py`的文件，并用Python执行以进行模型训练：

   ```py
   from ultralytics import YOLO
   model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
   # Train the model
   results = model.train(data='balloon.yaml', epochs=100, imgsz=640)
   ```
   
   通过命令行执行上述代码：
   
   ```bash
   python train.py
   ```
   
   通常，20张图片，训练100个epoch已经可以得到不错的效果了。在CPU上也能完成训练。
   
6. 训练完成后，在`runs\detect\train\weights`里，我们可以找到训练好的模型文件。这里我们用以下代码，转换`best.pt`为ImageTrans支持的onnx格式：

   ```py
   from ultralytics import YOLO
   model = YOLO('best.pt')
   success = model.export(format='onnx')
   ```
   
   将上述代码保存为`convert.py`，通过命令行执行：

   ```bash
   python convert.py
   ```
   
7. 将转换得到的`best.onnx`复制到ImageTrans的目录或者项目的图片目录，重命名为`model.onnx`，并建立一个如下内容的`model.json`配置文件：

   ```json
   {
     "width":640,
     "height":640,
     "model":"model.onnx"
   }
   ```

   之后在ImageTrans的偏好设置里启用离线气泡检测，便可以在ImageTrans中通过气泡检测调用YOLOv8目标检测模型了。

可以在[此处](https://github.com/xulihang/balloon-dataset/)找到数据集和模型示例。

## 对长图的支持

有时候，我们需要处理的图片比较长。这时可以将图片裁剪为多份，用于训练和检测。

例子：

![条漫](/gallery/projects/webtoon/out/SQ.webp)

我们可以指定宽度、高度和子图片彼此重叠的比例对图片进行裁剪。

启用方法：

1. 对于目标检测标注数据管理器，我们可以直接在其界面中进行设置。
2. 对于使用训练好的模型用于检测，我们可以建一份配置文件，命名为`model.json`，和模型放在一起，用于指定相关参数。


   对于条漫，我们可以使用以下配置文件，将图片裁剪为若干份宽度高度均为图片宽度的子图，高度的重叠比例是20%：

   ```json
   {
      "width":640,
      "height":640,
      "model":"model.onnx",
      "ratio":1,
      "width_overlap":"0",
      "height_overlap":"20"
   }
   ```
   
   对于很大的图片，也可以使用以下配置文件，使用滑动窗口，以固定的宽度高度去裁剪图片：

   ```json
   {
      "width":640,
      "height":640,
      "ratio":1,
      "model":"model.onnx",
      "slidingWindow":{
         "width":1600,
         "height":1600
      }
   }
   ```
   
## 对分类的处理

ImageTrans使用字体样式的设置对应目标检测的分类结果，需要字体样式和分类的名字相对应。


导出标注数据时可以以字体样式作为类别进行导出。目标检测时也可以将分类结果保存为字体样式。

为了在目标检测时知道分类名，还需要在模型的位置放一个`model.classes`文件。该文件包含了模型的分类信息：

```json
{
  "0":"balloon",
  "1":"text"
}
```

如果需要根据分类ID过滤结果，可以给`model.json`添加`classes_to_use`的值。

例如：

```json
{
  "width":1024,
  "height":1024,
  "ratio":1,
  "classes_to_use":[0,1],
  "model":"model.onnx"
}
```

## 对倾斜目标的处理

如果需要检测倾斜的目标，得到它旋转的角度，我们需要使用OBB模型。

在导出数据时勾选使用OBB格式，可以导出用于OBB的标注文件。

训练时，也基于OBB的模型进行训练。

```py
from ultralytics import YOLO
model = YOLO('yolov8n-obb.pt')  # load a pretrained model (recommended for training)
# Train the model
results = model.train(data='balloon.yaml', epochs=100, imgsz=640)
```




