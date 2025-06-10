document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('churnForm');
  const resultDiv = document.getElementById('result');
  const spinner = document.getElementById('spinner');
  const toast = document.getElementById('toast');
  const themeToggle = document.getElementById('toggle-theme');
  const body = document.body;

  // Toggle dark mode
  themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    resultDiv.classList.remove('show');
    resultDiv.innerText = '';
    spinner.style.display = 'block';

    const data = {
      gender: parseInt(document.getElementById('gender').value),
      MonthlyCharges: parseFloat(document.getElementById('monthlyCharges').value),
      TotalCharges: parseFloat(document.getElementById('totalCharges').value),
      tenure: parseInt(document.getElementById('tenure').value)
    };

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      const message = resData.churn_prediction === 1
        ? "⚠️ Likely to Churn"
        : "✅ Not Likely to Churn";

      resultDiv.innerText = message;
      resultDiv.style.display = 'block';
      resultDiv.classList.add('show');
      showToast("Prediction Successful ✔");
    } catch (err) {
      resultDiv.innerText = "❌ Error connecting to server.";
      showToast("Server Error ❌");
    } finally {
      spinner.style.display = 'none';
    }
  });

  function showToast(message) {
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
});
