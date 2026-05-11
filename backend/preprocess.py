import cv2
import os

def clean_image(image_path):
    img = cv2.imread(image_path)
    if img is None: return None
    
    # Resize to AI standard 224x224
    img = cv2.resize(img, (224, 224))
    
    # Denoising for better accuracy
    img = cv2.fastNlMeansDenoisingColored(img, None, 10, 10, 7, 21)
    
    proc_path = os.path.join('processed_uploads', 'proc_' + os.path.basename(image_path))
    cv2.imwrite(proc_path, img)
    return proc_path