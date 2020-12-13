let editBudget = document.querySelector(".editBudget");
let budgetAmount = document.querySelector(".budgetAmount");
let submitBudget = document.querySelector('.submitBudget');
let displayTotal = document.querySelector('.displayTotal');

editBudget.style.visibility = "hidden";

submitBudget.addEventListener('click', function(){
    budgetAmount.style.visibility = "hidden";
    editBudget.style.visibility = "visible";
    submitBudget.style.visibility = "hidden";
    displayTotal.style.visibility="visible";
    displayTotal.style.color = "yellow";
    let inputValue = document.querySelector('.budgetAmount').value;
    let display = document.querySelector('.displayTotal');
    display.innerHTML =`$ ${inputValue}`;
});
editBudget.addEventListener('click', function() {
    budgetAmount.style.visibility = "visible";
    editBudget.style.visibility = "hidden";
    submitBudget.style.visibility = "visible";
    displayTotal.style.visibility = "hidden";
    document.querySelector(".budgetAmount").value = "none";
});

document.getElementById("purchase").addEventListener('click',function(){
  let expenses = document.getElementById("expenses").value;
  let purchaseAmount = document.getElementById("purchaseAmount").value;
  let listOfItems = document.getElementById("listOfItems");
  let item1= document.getElementById('item1');
  let item2= document.getElementById('item2');
  let item3= document.getElementById('item3');
  let item4= document.getElementById('item4');
  if (expenses === "Entertainment") {
    item1.append (` Entertainment amount: $ ${purchaseAmount}`);
  } else if (expenses === "Food") {
    item2.append(` Food amount: $ ${purchaseAmount}`);
  } else if (expenses === "Bills") {
    item4.append( ` Billing amount: $ ${purchaseAmount}`);
  } else if (expenses === "Clothing") {
    item3.append(` Clothing amount: $ ${purchaseAmount}`);
  }
});
let entertainmentTotal = 0.00;
let clothingTotal = 0.00;
let foodTotal = 0.00;
let billsTotal = 0.00;
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
        foodTotal = foodTotal + parseFloat(purchaseAmount);
        food.innerHTML="Food: $" + foodTotal;
      } else if (expenses === "Bills") {
        billsTotal = billsTotal + parseFloat(purchaseAmount);
        bills.innerHTML="Bills: $" + billsTotal;
      } else if (expenses === "Clothing") {
        clothingTotal = clothingTotal + parseFloat(purchaseAmount);
       clothing.innerHTML="Clothing: $" + clothingTotal;
      }
})