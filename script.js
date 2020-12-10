let budgetButton = document.querySelector('.submitBudget');
let budgetA = document.querySelector(".budgetAmount" );
let budgetEdit = document.querySelector(".editBudget");

budgetEdit.style.visibility = "hidden";

budgetButton.addEventListener('click', function(){
    budgetA.style.visibility = "hidden";
    budgetEdit.style.visibility = "visible";
    budgetButton.style.visibility = "hidden";
    let inputValue = document.querySelector('.budgetAmount').value;
    let display = document.querySelector('.displayTotal');
    display.innerHTML =`$ ${inputValue}`;  
});
budgetEdit.addEventListener('click', function() {
    budgetA.style.visibility = "visible";
    budgetEdit.style.visibility = "hidden";
    budgetButton.style.visibility = "visible";
    budgetA.value = "none";
});


