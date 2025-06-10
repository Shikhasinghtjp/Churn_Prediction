from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd
from utils import preprocess_input
import os
app = Flask(__name__, template_folder=os.path.join(os.path.dirname(__file__), '..', 'templates'))

# Load model
model = joblib.load("app/model.pkl")

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_df = preprocess_input(data)
        prediction = model.predict(input_df)
        return jsonify({"churn_prediction": int(prediction[0])})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
