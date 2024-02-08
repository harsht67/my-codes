//  ensures that a function is called at most once in a specified time interval. 
// use case - autocomplete feature on a search input field

// Throttle function implementation
function throttle(func, delay) {
    let timeoutId;
    return function (...args) {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                timeoutId = null;
            }, delay);
        }
    };
}

// Usage example: Throttle API request function
const throttleApiRequest = throttle(fetchSearchSuggestions, 300); // Throttle to 300ms

// Event listener for input change
searchInput.addEventListener('input', () => {
    throttleApiRequest(searchInput.value);
});
