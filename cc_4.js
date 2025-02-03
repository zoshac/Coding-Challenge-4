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

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total Sales: $${totalSales}`);
