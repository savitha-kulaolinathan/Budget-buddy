document.getElementById("enterBudget").addEventListener("click", (e) => {
  e.preventDefault();
  let budgetAmount = document.getElementById("budgetAmount").value;
  let amountOfBudget = document.getElementById("amountOfBudget");
  amountOfBudget.innerText = `$ ${budgetAmount}`;
});

function expensesAmount(e) {
  e.preventDefault();
  let expenses = document.getElementById("expenses").value;
  let purchaseAmount = document.getElementById("purchaseAmount").value;
  let listOfItems = document.getElementById("listOfItems");
  
  

  if (expenses === "Entertainment") {
    let item1 = document.createElement("div");
    item1.innerText = `Entertainment amount: $ ${purchaseAmount}`;
    listOfItems.append(item1);
    let amountOfBudget = document.getElementById("amountOfBudget");
  
    let balance = document.getElementById('balance');   
    let total = parseInt(amountOfBudget) - parseInt(purchaseAmount);
    balance.innerText = total;
    
  } else if (expenses === "Food") {
    let item2 = document.createElement("div");
    item2.innerText = `Food amount: $ ${purchaseAmount}`;
    listOfItems.append(item2);
  } else if (expenses === "Bills") {
    let item4 = document.createElement("div");
    item4.innerText = ` Billing amount: $ ${purchaseAmount}`;
    listOfItems.append(item4);
  } else if (expenses === "Clothing") {
    let item3 = document.createElement("div");
    item3.innerText = ` Clothing amount: $ ${purchaseAmount}`;
    listOfItems.append(item3);
  }
}
