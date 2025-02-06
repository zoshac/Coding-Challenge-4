// Task 1 Customer Discounts 
let purchaseAmount = 500;
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.4;
}
console.log("Customer Discount Applied"); 
console.log(`Final amount after discount: $${finalAmount}`);


// Task 2 Sales Report 
let sales = [200, 150, 500, 300, 450];
let totalSales = 0;

// Total Sales calculation

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total Sales: $${totalSales}`);

// Task 3 Inventory Depletion 
let stock = 10;

// Depletion of stock 'til finished 

while (stock > 0){
    stock--;
}
console.log("Stock Remainging", stock);
console.log("Stock Depleted");

// Task 4 Customer Survey
let responses = 0; 
do {
    responses++;
} while(responses < 3);

console.log("Response Collection", responses);

// Task 5 Employee Info 
let employee = { name: "Alice", position: "Manager", salary: 75000 }

for (let key in employee); //Iterate through object properties

console.log("Emploee Info", employee);

// Task 6 Product Listings 
let products  = ["mascara", "foundation", "blush"];
for (let product of products);

console.log("Product Listings", products);

// Task 7 Order Processing 
let orders = [876, 868, 246]; 
orders.forEach(orderIDs =>{}) 

console.log("Order IDs", orders);

// Task 8 Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
const amount = 750;
const taxRate = 0.05;
// Tax Usage 

const tax = calculateTax(amount, taxRate);

console.log("Tax", calculateTax);

// Task 9 Discount Application
const applyDiscount = function(price, discountPercentage){
    return price - (price * (discountPercentage / 100));
};
let discountPrice = applyDiscount (500, 20)

console.log(`Discounted price: $${discountPrice}`);

// Task 10 Loyalty Points
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);
};
let points = calculatePoints(600);

console.log(`Customer Loyalty Points: ${points}`);

// All Tasks Complete!