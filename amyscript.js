
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    let category = document.getElementById('category');
    let catValue = category.value;
    let entertainment = 0;
    let food = 0;
    let clothing = 0;
    let bills = 0;
    let other = 0;
    let amount = document.querySelector('.purchaseAmount').value;
    let entertainmentTotal = document.getElementById('entertainmentTotal');
    let foodTotal = document.getElementById('foodTotal');
    let clothingTotal = document.getElementById('clothingTotal');
    let billsTotal = document.getElementById('billsTotal');
    let otherTotal = document.getElementById('otherTotal');
    let entTotal = entertainment += amount;
    let fTotal = food += amount;
    let clothTotal = clothing += amount;
    let bTotal = bills += amount;
    let othTotal = other += amount;

    if (catValue = "entertainment") {
        entertainmentTotal.innerHTML = "Entertainment: $" + entTotal; 
    } else if (catValue = "food") {
        foodTotal.innerHTML = "Food: $" + fTotal;
    } else if (catValue = "clothing") {
        clothingTotal.innerHTML= "Clothing $" + clothTotal;
    } else if (catValue = "bills") {
        billsTotal.innerHTML = "Bills $" + bTotal;
    } else {
        otherTotal.innerTHML = "Other: $" + othTotal;
    }
    })
