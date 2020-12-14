var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Entertainment', 'Food', 'Clothing', 'Bills'],
        datasets: [{
            label: 'Total Expenses by Category',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [entertainmentTotal, foodTotal, clothingTotal, billsTotal ]
        }]
    },

    // Configuration options go here
    options: {}
});