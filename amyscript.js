let entertainmentTotal = 0.00;
let clothingTotal = 0;
let foodTotal = 0;
let billsTotal = 0;

document.getElementById("purchase").addEventListener("click", function() {
    let expenses = document.getElementById("expenses").value;
    let purchaseAmount = document.getElementById("purchaseAmount").value;
    let entertainment = document.getElementById("entertainment")
    let food = document.getElementById("food")
    let clothing = document.getElementById("clothing")
    let bills = document.getElementById("bills")
    if (expenses === "Entertainment") {
        entertainmentTotal = entertainmentTotal + parseFloat(purchaseAmount);
        entertainment.innerHTML="Entertainment: $" + entertainmentTotal;
      } else if (expenses === "Food") {
        food.innerHTML="Food: $" + foodTotal + purchaseAmount;
      } else if (expenses === "Bills") {
        bills.innerHTML="Bills: $" + billsTotal + purchaseAmount;
      } else if (expenses === "Clothing") {
        clothing.innerHTML="Clothing: $" + clothingTotal + purchaseAmount;
      }
})