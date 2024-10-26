document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const orderList = document.getElementById('order-list');
    const calculateTotalButton = document.getElementById('calculate-total');
    const totalCost = document.getElementById('total-cost');

    let order = [];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                order.push({
                    name: checkbox.id,
                    price: parseFloat(checkbox.value),
                });
            } else {
                order = order.filter(item => item.name !== checkbox.id);
            }
        });
    });

    calculateTotalButton.addEventListener('click', () => {
        const cost = order.reduce((total, item) => total + item.price, 0);
        totalCost.textContent = `Total Cost: $${cost.toFixed(2)}`;
    });

    calculateTotalButton.disabled = true;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            calculateTotalButton.disabled = order.length === 0;
        });
    });
});