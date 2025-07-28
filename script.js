// Get references to DOM elements
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Function to convert decimal to binary
const decimalToBinary = (input) => {
  // Track original input at each step
  const inputs = []; 
  // Track quotients during division
  const quotients = [];
  // Track remainders (binary digits)
  const remainders = [];

  // Handle special case where input is 0
  if (input === 0) {
    result.innerText = "0";
    return;
  }

  // Loop to perform division and store remainders
  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    // Save the state for debugging
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  // Update input for the next iteration
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  // Reverse and joi remainders to form the binary number
  result.textContent = remainders.reverse().join("");
};


// Validate and process user input
const checkUserInput = () => {
  // Check for empty input, non-number or negative number
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  // Call conversion function with valid input
  decimalToBinary(parseInt(numberInput.value));
  // Clear input field
  numberInput.value = "";
};

// Handle button click
convertBtn.addEventListener("click", checkUserInput);

// Handle "Enter" key press
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
