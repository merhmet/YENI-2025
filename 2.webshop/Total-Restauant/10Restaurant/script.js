const items = document.querySelectorAll('.item');
const selectedItems = document.getElementById('selected-items');
const totalAmount = document.getElementById('total-amount');
const proceedBtn = document.getElementById('proceed-btn');
const confirmation = document.getElementById('confirmation');

const itemPrices = {
    'chicken-joy': 99,
    'burger-donut': 45,
    'fries': 35,
    'hot-dog': 85,
    'corned-beef': 85,
    'beef-tapa': 85,
    'water': 20,
    'rc': 30,
    'coke': 30,
    'sprite': 30,
    'ice-tea': 35,
    'pineapple-juice': 35,
};

let selectedItemsList = {};

items.forEach(item => {
    item.addEventListener('click', () => {
        const itemId = item.id;
        if (selectedItemsList[itemId]) {
            selectedItemsList[itemId]++;
        } else {
            selectedItemsList[itemId] = 1;
        }
        updateOrderSummary();
    });
});

function updateOrderSummary() {
    selectedItems.innerHTML = '';
    let total = 0;

    for (const item in selectedItemsList) {
        if (selectedItemsList[item] > 0) {
            const itemTotal = selectedItemsList[item] * itemPrices[item];
            total += itemTotal;
            selectedItems.innerHTML += `<li>${item} x${selectedItemsList[item]} - ${itemTotal} pesos</li>`;
        }
    }

    totalAmount.textContent = total;
}

proceedBtn.addEventListener('click', () => {
    confirmation.style.display = 'block';
});
// Add these lines after the existing JavaScript code

const serviceRatingInput = document.getElementById('service-rating');
const selectedRating = document.getElementById('selected-rating');
const confirmBtn = document.getElementById('confirm-rating-btn');

serviceRatingInput.addEventListener('input', () => {
    selectedRating.textContent = `Selected Rating: ${serviceRatingInput.value}`;
});

confirmBtn.addEventListener('click', () => {
    const serviceRating = serviceRatingInput.value;
    alert(`Thank you for your rating! You rated our service: ${serviceRating}`);
    // You can perform further actions with the rating data, like sending it to a server.
});