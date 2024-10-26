document.addEventListener('DOMContentLoaded', () => {
    const menu = [
        { id: 1, name: 'Samosa', price: 10 },
        { id: 2, name: 'Litti', price: 10 },
        { id: 3, name: 'Half chat', price: 20 },
        { id: 4, name: 'Full chat', price: 40 },
      {id: 5, name: 'Jalebi', price: 15},
      {id: 6, name: 'Laddu', price: 15},
      {id: 7, name: 'Batasa', price: 20},
      {id: 8, name: 'Gulab jamun', price: 10},
      {id: 9, name: 'Rasgulla(sponge)', price: 10}
    ];

    const menuList = document.getElementById('menu-list');
    const orderSummary = document.getElementById('order-summary');
    const placeOrderButton = document.getElementById('place-order');

    let order = [];

    // Function to render the menu
    const renderMenu = () => {
        menuList.innerHTML = '';
        menu.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - €${item.price.toFixed(2)} <button data-id="${item.id}">BESTELLEN</button>`;
            menuList.appendChild(li);
        });
    };

    // Function to render the order summary
    const renderOrderSummary = () => {
        orderSummary.innerHTML = '';
        if (order.length === 0) {
            orderSummary.innerHTML = '<li>Je bestelling is leeg.</li>';
            return;
        }
        order.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - €${item.price.toFixed(2)} x ${item.quantity}`;
            orderSummary.appendChild(li);
        });
    };

    // Function to add item to the order
    const addItemToOrder = (id) => {
        const item = menu.find(item => item.id === id);
        if (!item) return;
        const existingItem = order.find(orderItem => orderItem.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            order.push({ ...item, quantity: 1 });
        }
        renderOrderSummary();
    };

    // Event listener for menu buttons
    menuList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const id = parseInt(event.target.dataset.id, 10);
            addItemToOrder(id);
        }
    });

    // Event listener for place order button
    placeOrderButton.addEventListener('click', () => {
        if (order.length === 0) {
            alert('Your order is empty.');
            return;
        }
        alert('Order placed successfully!');
        order = [];
        renderOrderSummary();
    });

    // Initial render
    renderMenu();
});