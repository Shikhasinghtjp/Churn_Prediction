import pandas as pd

def preprocess_input(data: dict) -> pd.DataFrame:
    """
    Takes raw JSON input and returns a cleaned DataFrame ready for prediction.
    """
    # Convert input dict to DataFrame
    df = pd.DataFrame([data])

    # Handle categorical encodings
    if 'gender' in df.columns:
        df['gender'] = df['gender'].map({'Female': 0, 'Male': 1})

    # Ensure numeric conversion
    df['TotalCharges'] = pd.to_numeric(df.get('TotalCharges', 0), errors='coerce')
    df['MonthlyCharges'] = pd.to_numeric(df.get('MonthlyCharges', 0), errors='coerce')
    df['tenure'] = pd.to_numeric(df.get('tenure', 0), errors='coerce')

    # Fill or drop missing values (based on your model training strategy)
    df.fillna(0, inplace=True)

    return df[['gender', 'MonthlyCharges', 'TotalCharges', 'tenure']]
