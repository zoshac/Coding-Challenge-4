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

// Task 6 