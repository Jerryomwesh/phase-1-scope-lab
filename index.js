// gobal variable customerName using var
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicit global variable declaration
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// Function attempting to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; 
}



