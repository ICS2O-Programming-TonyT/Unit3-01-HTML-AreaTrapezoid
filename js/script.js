// Get the form and result elements
const form = document.getElementById('trapezoid-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the base and height and units values from the form
  const Height = parseFloat(document.getElementById('Height').value);
  const Base1 = parseFloat(document.getElementById('Base1').value);
  const Base2 = parseFloat(document.getElementById('Base2').value);
  const Units = document.getElementById('Units').value;
  // Calculate the Are of a TrapeZoid 
  const area = ((Base1+Base2)/2)*Height;
  console.log(area)
  // Display the result
  resultDiv.innerHTML = `The area of the Trapezoid is ${area.toFixed(2)} ${Units}<sup>2</sup>.`;
});
