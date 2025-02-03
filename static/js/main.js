document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            renderSalesChart(data.sales, data.months);
            renderCategoryChart(data.categories);
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});

function renderSalesChart(sales, months) {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Vendas Mensais',
                data: sales,
                borderColor: '#1e3a8a',
                backgroundColor: 'rgba(30, 58, 138, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `R$ ${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return `R$ ${value}`;
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

function renderCategoryChart(categories) {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    const labels = Object.keys(categories);
    const values = Object.values(categories);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: ['#1e3a8a', '#facc15', '#ef4444', '#10b981', '#8b5cf6', '#3b82f6', '#f43f5e'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}