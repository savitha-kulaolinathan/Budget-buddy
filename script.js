//setting weekly budget
document.querySelector(".editBudget").style.visibility = "hidden";
document.querySelector(".submitBudget").addEventListener("click", function () {
  document.querySelector(".budgetAmount").style.visibility = "hidden";
  document.querySelector(".editBudget").style.visibility = "visible";
  document.querySelector(".submitBudget").style.visibility = "hidden";
  document.querySelector(".displayTotal").style.visibility = "visible";
  document.querySelector(".displayTotal").style.color = "yellow";
  let inputValue = document.querySelector(".budgetAmount").value;
  let display = document.querySelector(".displayTotal");
  display.innerHTML = `$ ${inputValue}`;
  document.querySelector(".editBudget").addEventListener("click", function () {
    document.querySelector(".budgetAmount").style.visibility = "visible";
    document.querySelector(".editBudget").style.visibility = "hidden";
    document.querySelector(".submitBudget").style.visibility = "visible";
    document.querySelector(".displayTotal").style.visibility = "hidden";
    document.querySelector(".budgetAmount").value = "none";
  });
});

//setting and updating total left to spend



//adding items
document.getElementById("purchase").addEventListener("click", function () {
  let expenses = document.getElementById("expenses").value;
  let purchaseAmount = document.getElementById("purchaseAmount").value;
  let listOfItems = document.getElementById("listOfItems");
  let item1 = document.getElementById("item1");
  let item2 = document.getElementById("item2");
  let item3 = document.getElementById("item3");
  let item4 = document.getElementById("item4");
  if (expenses === "Entertainment") {
    item1.append(` Entertainment amount: $ ${purchaseAmount}`);
  } else if (expenses === "Food") {
    item2.append(` Food amount: $ ${purchaseAmount}`);
  } else if (expenses === "Bills") {
    item4.append(` Billing amount: $ ${purchaseAmount}`);
  } else if (expenses === "Clothing") {
    item3.append(` Clothing amount: $ ${purchaseAmount}`);
  }
});

//Category totals
let entertainmentTotal = 0.0;
let clothingTotal = 0.0;
let foodTotal = 0.0;
let billsTotal = 0.0;


document.getElementById("purchase").addEventListener("click", function () {
  let expenses = document.getElementById("expenses").value;
  let purchaseAmount = document.getElementById("purchaseAmount").value;
  let entertainment = document.getElementById("entertainment");
  let food = document.getElementById("food");
  let clothing = document.getElementById("clothing");
  let bills = document.getElementById("bills");
  if (expenses === "Entertainment") {
    entertainmentTotal = entertainmentTotal + parseFloat(purchaseAmount);
    entertainment.innerHTML = "Entertainment: $" + entertainmentTotal;
  } else if (expenses === "Food") {
    foodTotal = foodTotal + parseFloat(purchaseAmount);
    food.innerHTML = "Food: $" + foodTotal;
  } else if (expenses === "Bills") {
    billsTotal = billsTotal + parseFloat(purchaseAmount);
    bills.innerHTML = "Bills: $" + billsTotal;
  } else if (expenses === "Clothing") {
    clothingTotal = clothingTotal + parseFloat(purchaseAmount);
    clothing.innerHTML = "Clothing: $" + clothingTotal;
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
