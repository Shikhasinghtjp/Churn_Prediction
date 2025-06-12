# 📉 Customer Churn Prediction App

This project is an end-to-end **Machine Learning web application** that predicts whether a customer is likely to churn.
Built with **Flask** for the backend and a styled frontend using **HTML, CSS, and JavaScript**, the app allows users to input customer data and receive real-time churn predictions.

---

## 🚀 Project Overview

- 🎯 Goal: Predict customer churn based on demographic and service usage data
- 🤖 ML Model: Trained using Scikit-learn (Logistic Regression or other classifier)
- 🌐 Web App: Interactive interface with a styled frontend and REST API backend
- 📊 Visualization: Toast messages, animations, Lottie icons, and dark mode toggle

---

## 📁 Project Structure

Churn_Prediction/
├── model/
│ └── churn_model.pkl # Trained ML model
├── static/
│ ├── style.css # Custom CSS for UI styling
│ └── script.js # JS for animations and interactivity
├── templates/
│ └── index.html # Frontend HTML template
├── app.py # Flask application logic
├── requirements.txt # Project dependencies
└── README.md # Project documentation


---

## 🎨 Features

- 🧠 Real-time customer churn prediction
- ✨ Clean and responsive UI with custom animations
- 🌙 Dark mode toggle
- 📢 Toast-style user feedback messages
- 📦 Lottie icons for better UX

---


 🔽 Clone the Repository

    git clone https://github.com/Shikhasinghtjp/Churn_Prediction.git

    cd Churn_Prediction

📦 Install Dependencies

    pip install -r requirements.txt

▶️ Run the Flask App

    python app.py

   Open your browser and go to:
   http://127.0.0.1:5000

---

🧠 ML Model Summary

Preprocessing: One-Hot Encoding, Scaling, Imputation

Features: Gender, Age, Monthly Charges, Tenure, Internet Service, etc.

Output: Binary classification - Churn or No Churn

---

📊 Sample UI Screenshot


---

🛠️ Tech Stack

Python – ML model + backend

Flask – Web server framework

HTML/CSS/JS – Frontend

Scikit-learn – Model training

Joblib – Model serialization


