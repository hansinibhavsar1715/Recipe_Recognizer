from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, DetectedIngredient, Feedback
from preprocess import clean_image
from detection import predict_ingredients
import os

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running"

# Database Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///recipes.db'
db.init_app(app)

# Folders Create Karein
os.makedirs('uploads', exist_ok=True)
os.makedirs('processed_uploads', exist_ok=True)

with app.app_context():
    db.create_all()

@app.route('/recognize', methods=['POST'])
def recognize():
    file = request.files['file']
    path = os.path.join('uploads', file.filename)
    file.save(path)

    # Step 2: Clean
    proc_path = clean_image(path)
    
    # Step 3: Detect
    predictions = predict_ingredients(proc_path)

    # Step 4: Save to SQLite
    for p in predictions:
        ing = DetectedIngredient(name=p['label'], confidence=str(p['score']))
        db.session.add(ing)
    db.session.commit()

    return jsonify(predictions)

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json
    entry = Feedback(predicted=data['predicted'], actual=data['actual'])
    db.session.add(entry)
    db.session.commit()
    return jsonify({"status": "saved"})

if __name__ == '__main__':
    app.run(debug=True, port=5000) 

