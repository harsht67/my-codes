// Debouncing ensures that a function is called only after a certain period of inactivity. 
// handling input validation or auto-saving in forms.

// Debounce function implementation
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Usage example: Debounce validation function
  const debounceValidation = debounce(validateForm, 500); // Debounce to 500ms
  
  // Event listener for input change
  inputField.addEventListener('input', () => {
    debounceValidation(inputField.value);
  });
  