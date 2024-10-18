const tables = [
    { id: 1, name: 'Tafel 1' },
    { id: 2, name: 'Tafel 2' },
    { id: 3, name: 'Tafel 3' },
    { id: 4, name: 'Tafel 4' },
];

const menuItems = [
    { id: 1, name: 'Kapsalon', price: 12.00, img: 'https://od.lk/s/OTFfMzExNTY0NjNf/Kapsalon_Amstelveen.jpg' },
    { id: 2, name: 'Pitta Brood', price: 10.00, img: 'https://od.lk/s/OTFfMzExNTY0MjFf/pitta.jpg' },
    { id: 3, name: 'Schotel', price: 20.0, img: 'https://od.lk/s/OTFfMzExNTk4MjBf/shoarma-schotel.jpg' },
    { id: 4, name: 'Durum', price: 5.0, img: 'https://od.lk/s/OTFfMzExNjIwMjlf/durum.png' },
];

let selectedTable = null;
let cart = [];

const tableList = document.getElementById('table-list');
const menu = document.getElementById('menu');
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
const printButton = document.getElementById('print-order');

// Populate table options
tables.forEach(table => {
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('table-item');
    tableDiv.textContent = table.name;
    tableDiv.onclick = () => selectTable(table.id);
    tableList.appendChild(tableDiv);
});

// Populate menu items
menuItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');
    itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>Prijs: €${item.price.toFixed(2)}</p>
        <button onclick="addToCart(${item.id})">Bestellen</button>
    `;
    menu.appendChild(itemDiv);
});

function selectTable(id) {
    selectedTable = id;
    alert(`Tefel Geselecteerd ${tables.find(t => t.id === id).name}`);
}

function addToCart(id) {
    if (!selectedTable) {
        alert('Selecteer eerst Tafel!');
        return;
    }
    
    const item = menuItems.find(i => i.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalDisplay.textContent = total.toFixed(2);
    printButton.classList.remove('hidden');
}

document.getElementById('place-order').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else if (!selectedTable) {
        alert('Please select a table before placing the order!');
    } else {
        alert(`Bestelling succes Besteld !!! ${tables.find(t => t.id === selectedTable).name}!`);
        cart = [];
        updateCart();
        selectedTable = null;
    }
});

// Print order
printButton.addEventListener('click', () => {
    const orderDetails = `
        Table: ${tables.find(t => t.id === selectedTable).name}
        Order:
        ${cart.map(item => `${item.name} - €${item.price.toFixed(2)}`).join('\n')}
        Total: €${totalDisplay.textContent}
    `;
    
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<pre>' + orderDetails + '</pre>');
    printWindow.document.close();
    printWindow.print();
});