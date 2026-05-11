import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input, decode_predictions
import numpy as np
import cv2

model = MobileNetV2(weights='imagenet')

def predict_ingredients(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    x = np.expand_dims(img, axis=0)
    x = preprocess_input(x)

    preds = model.predict(x)
    # Top 3 results nikalna
    results = decode_predictions(preds, top=3)[0]
    return [{"label": r[1], "score": float(r[2])} for r in results]