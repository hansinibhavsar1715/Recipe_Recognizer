from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

class DetectedIngredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    confidence = db.Column(db.String(10))

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    predicted = db.Column(db.String(100))
    actual = db.Column(db.String(100))