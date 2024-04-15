const form = document.getElementById("form");
    
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const gross = document.getElementById("gross");
    const extra = document.getElementById("extra");
    const opt = document.getElementById("opt");
    const deduct = document.getElementById("deduct");

    let hasError = false; // Flag to track if any error occurs

    // Validate gross income
    if (!validateInput(gross.value)) {
        showError("grossError", "Enter only numbers for gross income.");
        hasError = true;
    } 

    // Validate extra income
    if (!validateInput(extra.value)) {
        showError("extraError", "Please enter only numbers for extra income.");
        hasError = true;
    } 

    // Validate age group selection
  //  if (opt.value === "") {
    //    showError("optError", "Please select an age group."); // Add error handling for age group
      //  hasError = true;
    //}

    // Validate deduction
    if (!validateInput(deduct.value)) {
        showError("deductError", "Please enter only numbers for deduction.");
        hasError = true;
    }

    // If no error, submit the form
    if (!hasError) {
        localStorage.setItem('gross', gross.value);
        localStorage.setItem('extra', extra.value);
        localStorage.setItem('opt', opt.value);
        localStorage.setItem('deduct', deduct.value);
        window.location.href = "final.html";
    }
});

function validateInput(value) {
    if (value === "") {
        return false; // Handle empty input
    } else if (isNaN(value)) {
        return false; // Handle non-numeric characters
    }
    return true;
}

function showError(errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.add('err');

    // Update tooltip text based on errorMessage
    const tooltipText = errorElement.querySelector('.tooltiptext');
    tooltipText.textContent = errorMessage;
}
