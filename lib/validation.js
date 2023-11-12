// TODO: Validate this form

// 1. Select elements (allInputs, emailInput, tosCheckbox and submitButton)
const allInputs = document.querySelectorAll('.form-control');
const allInputsArray = Array.from(allInputs);
const emailInput = document.querySelector('#email');
const tosCheckbox = document.querySelector('#tos');
const submitButton = document.querySelector('.btn');

// 2. Listen to the "blur" event on each field
allInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    // input.classList.add('is-valid');
    validInput(input);
    enableButton();
  })
});

// 3. Listen to the "change" event on checkbox
tosCheckbox.addEventListener('change', () => {
  // alert('you clicked me!')
  // enableButton();
  enableButton();
});

// 4. Create the enableButton function
const enableButton = () => { // ECMAscript 6
  if (checkboxChecked && allFilled) {
    submitButton.disabled = false;
  }
};

// 5. Create the addValidationClasses function
const addValidationClasses = (input, isValid) => {
  if (isValid) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
};

// 6. Create the checkboxChecked function
const checkboxChecked = (input) => {
  return input.checked;
};
// const checkboxChecked = input => input.checked;

// 7. Create the allFilled function
const allFilled = (inputs) => {
  return inputs.every((input) => { // true or false
    return input.classList.contains('is-valid'); //[true, false, true, true, true]
  })
};

// 8. Create the validInput function
const validInput = (input) => {
  if (input === emailInput) {
    emailValidation(input);
  } else {
    addValidationClasses(input, input.value !== '')
  }
};

// 9. Create the emailValidation function
const emailValidation = (input) => {
  const isValid = /^\w+@\w+(\.\w{2,4})+$/.test(input.value);
  addValidationClasses(input, isValid);
};
