---
date: 2024-03-30 19:55:50+08:00
layout: post
title: How to Train a YOLOv8 Object Detection Model
categories: blog
tags: imagetrans
---

YOLOv8 is the latest YOLO object detection model. The inference and training in YOLOv8 are very easy to get started.

ImageTrans v2.10.0 added support for YOLOv8 model. It can use Java to call OpenCV's DNN module for object detection. An object detection annotation data manager is also provided so that we can export an ImageTrans project to a YOLO format training dataset or import the dataset to an ImageTrans project, which makes it easy to train our own model according to the needs.

Here are the detailed steps to do this:

1. Open an ImageTrans project and use automatic or manual methods to complete the annotations of the objects (mainly text areas) in images.
2. Open Object Detection Annotation Data Manager through menu->tools.
3. Export the data to a directory. The data will be stored in YOLO format according to the following structure.

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

4. Install Python and follow YOLOv8's [documentation](https://docs.ultralytics.com/) to install YOLO.
5. Create a new `train.py` file in the directory of the exported data and execute it using Python to start training the model:

   ```py
   from ultralytics import YOLO
   model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
   # Train the model
   results = model.train(data='balloon.yaml', epochs=100, imgsz=640)
   ```

   Execute the above code through the command line:

   ```bash
   python train.py
   ```

   Usually, training 100 epochs with 20 images can achieve a good result. The training can be done with a CPU.

6. After the training is completed, we can find the trained model file in `runs\detect\train\weights`. Here, we use the following code to convert `best.pt` to the onnx format supported by ImageTrans:

   ```py
   from ultralytics import YOLO
   model = YOLO('best.pt')
   success = model.export(format='onnx')
   ```

   Save the above code as `convert.py` and execute it from the command line:

   ```bash
   python convert.py
   ```

7. Copy the converted `best.onnx` to the directory of ImageTrans or the image folder of an ImageTrans project, rename it `model.onnx`. Then, create a configuration file `model.json` with the following content:

   ```json
   {
     "width":640,
     "height":640,
     "model":"model.onnx"
   }
   ```

   Enable offline balloon detection in ImageTrans’s preferences. Afterwards, the YOLOv8 object detection model can be called in ImageTrans through balloon detection.

You can find sample datasets and trained models [here](https://github.com/xulihang/balloon-dataset/).

## Support for Long Images

Sometimes, the images we need to process are very long. We can crop the images into smaller ones for training and detection.

Example:

![webtoon](/gallery/projects/webtoon/out/SQ.webp)

We can crop images by specifying the width, height, and proportions of sub-images that overlap each other.

How to enable:

1. For the object detection annotation data manager, we can set it up directly in its interface.
2. For using the trained model for detection, we can create a configuration file named `model.json` along with the model, to specify the relevant parameters.


   For long-strip comics (webtoon), we can use the following config file to crop the image into several sub-images using the width of the image as the width and height for the cropped image with a 20% overlap ratio of the height:

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

   For large images, we can use the following config file which uses sliding window to crop the image at a fixed width and height:

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

## Managing Classes

ImageTrans uses the font style setting for classes. The name of the font style and the name of the class should be the same.

We can export the annotations with the font style's name as the class name. During object detection, we can use the detected class name as the name of the font style.

To get the class names during object detection, we need to put a file named `model.classes` along with the model file containing the class names of the model.

```json
{
  "0":"balloon",
  "1":"text"
}
```

## Detect Orieneted Objects

If we need to detect oriented objects and obtain their rotation degrees, we need to use OBB models.

Check "Use OBB format" to export annotation files in OBB format.

Then, train the model based on a OBB scheme or model.

```py
from ultralytics import YOLO
model = YOLO('yolov8n-obb.pt')  # load a pretrained model (recommended for training)
# Train the model
results = model.train(data='balloon.yaml', epochs=100, imgsz=640)
```

