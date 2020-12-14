let editBudget = document.querySelector(".editBudget");
let budgetAmount = document.querySelector(".budgetAmount");
let submitBudget = document.querySelector('.submitBudget');
let displayTotal = document.querySelector('.displayTotal');
let entertainmentTotal = 0.00;
let clothingTotal = 0.00;
let foodTotal = 0.00;
let billsTotal = 0.00;
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

document.getElementById("purchase").addEventListener("click", function() {
    let expenses = document.getElementById("expenses").value;
    let purchaseAmount = document.getElementById("purchaseAmount").value;
    let entertainment = document.getElementById("entertainment")
    let food = document.getElementById("food")
    let clothing = document.getElementById("clothing")
    let bills = document.getElementById("bills")
    let comment = document.getElementById('comment').value;
  let item1= document.getElementById('item1');
  let item2= document.getElementById('item2');
  let item3= document.getElementById('item3');
  let item4= document.getElementById('item4');
    if (expenses === "Entertainment") {
        entertainmentTotal = entertainmentTotal + parseFloat(purchaseAmount);
        entertainment.innerHTML="Entertainment: $" + entertainmentTotal;
        item1.append (`$${purchaseAmount} ${comment}, `);
      } else if (expenses === "Food") {
        foodTotal = foodTotal + parseFloat(purchaseAmount);
        food.innerHTML="Food: $" + foodTotal;
        item2.append(`$${purchaseAmount} ${comment}, `);
      } else if (expenses === "Bills") {
        billsTotal = billsTotal + parseFloat(purchaseAmount);
        bills.innerHTML="Bills: $" + billsTotal;
        item3.append(`$${purchaseAmount} ${comment}, `);
      } else if (expenses === "Clothing") {
        clothingTotal = clothingTotal + parseFloat(purchaseAmount);
        clothing.innerHTML="Clothing: $" + clothingTotal;
        item4.append(`$${purchaseAmount} ${comment}, `);
      }
})
