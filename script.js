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
}
