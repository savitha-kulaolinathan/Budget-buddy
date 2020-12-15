
let updateBalance= document.getElementById('updateBalance');
let  availableAmt = document.getElementById('spendLabel');

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
     availableAmt.style.color ="yellow" 
     availableAmt.style.fontSize ="30px";
     updateBalance.style.color = "yellow"
     updateBalance.style.fontSize="30px";
    updateBalance.innerHTML =` ${inputValue }`


document.querySelector(".editBudget").addEventListener('click', function() {
        document.querySelector(".budgetAmount" ).style.visibility = "visible";
        document.querySelector(".editBudget").style.visibility = "hidden";
        document.querySelector('.submitBudget').style.visibility = "visible";
        document.querySelector(".displayTotal").style.visibility = "hidden";
        document.querySelector(".budgetAmount" ).value = "none";
    });
});

document.getElementById("purchase").addEventListener('click',function(){
 let stuff = document.getElementById("stuff").value
  let expenses = document.getElementById("expenses").value;
  let purchaseAmount = document.getElementById("purchaseAmount").value;
  let listOfItems = document.getElementById("listOfItems"); 
  let balanceCheck= 0;
   balanceCheck = parseFloat(updateBalance.innerHTML)-parseFloat(purchaseAmount);

  if (expenses === "Entertainment" && balanceCheck >= 0) {
    let item1 = document.createElement("div");
    item1.innerText = `${stuff}: $ ${purchaseAmount}`;
    listOfItems.append(item1);   
  } else if (expenses === "Food" && balanceCheck >= 0) {
    let item2 = document.createElement("div");
    item2.innerText = `${stuff}: $ ${purchaseAmount}`;
    listOfItems.append(item2);
  } else if (expenses === "Bills" && balanceCheck >= 0) {
    let item4 = document.createElement("div");
    item4.innerText = `${stuff}: $ ${purchaseAmount}`;
    listOfItems.append(item4);
  } else if (expenses === "Clothing" && balanceCheck >= 0) {
    let item3 = document.createElement("div");
    item3.innerText = ` ${stuff}: $ ${purchaseAmount}`;
    listOfItems.append(item3);
  }
    if (purchaseAmount != 0) {
      if (balanceCheck >= 0 ) {
      updateBalance.innerHTML -= ` ${purchaseAmount}`;
      
     } 
     else{
      availableAmt.style.color ="red" 
      availableAmt.style.fontSize= "40px";
      updateBalance.style.color ="red" 
      updateBalance.style.fontSize = "30px";
      updateBalance.textContent = "Insufficient Balance";
       alert ("Do not have sufficient money!")
     }       

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
    
    balanceCheck = parseFloat(updateBalance.innerHTML)-parseFloat(purchaseAmount);
 
   
    if (expenses === "Entertainment" &&  balanceCheck >= 0) {
        entertainmentTotal = entertainmentTotal + parseFloat(purchaseAmount);
        entertainment.innerHTML="Entertainment: $" + entertainmentTotal;
      } else if (expenses === "Food" &&  balanceCheck >= 0) {
        foodTotal = foodTotal + parseFloat(purchaseAmount);
        food.innerHTML="Food: $" + foodTotal;
      } else if (expenses === "Bills" && balanceCheck >= 0) {
        billsTotal = billsTotal + parseFloat(purchaseAmount);
        bills.innerHTML="Bills: $" + billsTotal;
      } else if (expenses === "Clothing" && balanceCheck >= 0) {
        clothingTotal = clothingTotal + parseFloat(purchaseAmount);
       clothing.innerHTML="Clothing: $" + clothingTotal;
      }
      var ctx = document.getElementById("chart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Entertainment", "Clothing", "Food", "Bills"],
          datasets: [
            {
              label: "Spending by Category",
              data: [entertainmentTotal, clothingTotal, foodTotal, billsTotal],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
         
        },
      });
});








  




