from flask import redirect, render_template, jsonify, request
from app import app
from pymongo import MongoClient
from datetime import datetime

from dotenv import load_dotenv
import os

load_dotenv()

db = MongoClient(os.getenv("MONGODB_URI")).nti

@app.route("/")
@app.route("/index")
@app.route("/home")
def index():
    return render_template("index.html")

@app.route("/wishlists")
def wishlists():
    wishlists = db.wishlist.find({}).sort("timestamp", -1)
    return render_template("wishlists.html", wishlists=wishlists)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()
    db.wishlist.insert_one({
        "name": data["name"],
        "wishlist": data["wishlist"],
        "timestamp": datetime.now()
    })
    return jsonify({"message": "Form submitted successfully!"})