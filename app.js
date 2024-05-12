function calculate(operation) {
  // Get the binary numbers from the input fields
  var binary1 = document.getElementById('binary1').value;
  var binary2 = document.getElementById('binary2').value;

  // Convert binary strings to integers
  var num1 = parseInt(binary1, 2);
  var num2 = parseInt(binary2, 2);

  var result;

  // Perform the selected operation
  switch(operation) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          result = num1 / num2;
          break;
      default:
          result = "Invalid operation";
  }

  // Convert the result back to binary
  var binaryResult = result.toString(2);

  // Display the result
  document.getElementById('result').innerText = 'Result: ' + binaryResult;
}
