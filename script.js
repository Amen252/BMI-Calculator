function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height!");
      return;
  }

  const bmi = (weight / (height * height)).toFixed(1);

  const bmiResultElement = document.getElementById("bmi-result");
  const bmiStatusElement = document.getElementById("bmi-status");

  bmiResultElement.textContent = `Your BMI is: ${bmi}`;

  let status = "";
  if (bmi < 18.5) {
      status = "Underweight";
      bmiStatusElement.style.color = "#ffae42";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal weight";
      bmiStatusElement.style.color = "#28a745";
  } else if (bmi >= 25 && bmi <= 29.9) {
      status = "Overweight";
      bmiStatusElement.style.color = "#ffc107";
  } else {
      status = "Obese";
      bmiStatusElement.style.color = "#dc3545";
  }

  bmiStatusElement.textContent = `Status: ${status}`;
}
