document.querySelector(".editBudget").style.visibility = "hidden";
document.querySelector('.submitBudget').addEventListener('click', function(){
    document.querySelector(".budgetAmount" ).style.visibility = "hidden";
    document.querySelector(".editBudget").style.visibility = "visible";
    document.querySelector('.submitBudget').style.visibility = "hidden";
    document.querySelector('.displayTotal').style.visibility="visible";
    document.querySelector('.displayTotal').style.color = "yellow";
    let inputValue = document.querySelector('.budgetAmount').value;
    let display = document.querySelector('.displayTotal');
    display.innerHTML =`$ ${inputValue}`;
document.querySelector(".editBudget").addEventListener('click', function() {
        document.querySelector(".budgetAmount" ).style.visibility = "visible";
        document.querySelector(".editBudget").style.visibility = "hidden";
        document.querySelector('.submitBudget').style.visibility = "visible";
        document.querySelector(".displayTotal").style.visibility = "hidden";
        document.querySelector(".budgetAmount" ).value = "none";
    });
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

function addBalance() {
  var budget = parseInt(document.getElemetById("budgetAmt").value);
  var purchase = parseInt(document.getElemetById("purchaseAmt").value);
 
  var balDue = document.getElementById("balance-amount");
  balDue.value = budget - purchase;
}