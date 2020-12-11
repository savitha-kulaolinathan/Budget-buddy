
let budgetButton = document.querySelector('.submitBudget');
let budgetA = document.querySelector(".budgetAmount" );
let budgetEdit = document.querySelector(".editBudget");
let expensesAmount= document.querySelector('.purchased')

budgetEdit.style.visibility = "hidden";

budgetButton.addEventListener('click', function(){
    budgetA.style.visibility = "hidden";
    budgetEdit.style.visibility = "visible";
    budgetButton.style.visibility = "hidden";
    document.querySelector('.displayTotal').style.visibility="visible"
    document.querySelector('.displayTotal').style.color = "yellow";
    let inputValue = document.querySelector('.budgetAmount').value;
    let display = document.querySelector('.displayTotal');
    display.innerHTML =`$ ${inputValue}`;

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

