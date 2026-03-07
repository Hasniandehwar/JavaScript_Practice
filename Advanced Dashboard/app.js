 const today = new Date().toISOString().split('T')[0];
document.getElementById('startDate').value = today;
document.getElementById('endDate').value = today;
document.getElementById('startDate').max = today;
document.getElementById('endDate').max = today;



const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [
            {
                label: 'Orders',
                data: [12,19,7,15,22,30,25,35],
                backgroundColor: '#4e73df'
            },
            {
                type: 'line',
                label: 'Revenue',
                data: [8,12,10,18,20,28,24,32],
                borderColor: '#36b9cc',
                borderWidth: 3,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display:false
            }
        }
    }
});



const pie = document.getElementById('categoryChart');

new Chart(pie, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            data: [30,20,15,10,25],
            backgroundColor: [
                '#4e73df',
                '#1cc88a',
                '#f6c23e',
                '#e74a3b',
                '#858796'
            ]
        }]
    },
    options: {
        plugins:{
            legend :{
                display:false
            }
        },
        responsive: true,
        title: false
    }
});