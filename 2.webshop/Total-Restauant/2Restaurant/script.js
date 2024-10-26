document.addEventListener('DOMContentLoaded', () => {
    const tableSelect = document.getElementById('tableSelect');
    const currentTable = document.getElementById('currentTable');
    const menuItems = document.querySelectorAll('.menu-item');
    const orderList = document.getElementById('orderList');
    const submitOrderButton = document.getElementById('submitOrder');
    const receivedOrderButton = document.getElementById('receivedOrder');
    const orderSummary = document.getElementById('orderSummary');
    const summaryTable = document.getElementById('summaryTable');
    const summaryOrderList = document.getElementById('summaryOrderList');
    const totalPriceElement = document.getElementById('totalPrice');
    const payReceiptButton = document.getElementById('payReceipt');
    const menuSection = document.getElementById('menu');

    let currentOrders = {};  // Store orders by table
    let tableViews = {};     // Track whether the table is in "order received" view or menu view

    // Update current table display
    tableSelect.addEventListener('change', function() {
        const tableNumber = tableSelect.value;
        currentTable.textContent = tableNumber || 'None';

        if (currentOrders[tableNumber] && tableViews[tableNumber] === 'submitted') {
            showOrderSummary(tableNumber);
            showReceivedOrderButton();
        } else if (currentOrders[tableNumber]) {
            showMenuView();
            updateOrderList(currentOrders[tableNumber]);
        } else {
            resetOrderView();
            orderList.innerHTML = '<li>Nog geen bestellingen</li>';
        }
    });

    // Add item to order
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const tableNumber = tableSelect.value;

            if (!tableNumber) {
                alert('Please select a table first');
                return;
            }

            const itemName = this.getAttribute('data-name');
            const itemPrice = this.getAttribute('data-price');

            if (!currentOrders[tableNumber]) {
                currentOrders[tableNumber] = [];
            }

            currentOrders[tableNumber].push({ name: itemName, price: itemPrice });

            updateOrderList(currentOrders[tableNumber]);
        });
    });

    // Update the displayed order list for the selected table
    function updateOrderList(orders) {
        orderList.innerHTML = '';
        orders.forEach(order => {
            const listItem = document.createElement('li');
            listItem.textContent = `${order.name} - €${order.price}`;
            orderList.appendChild(listItem);
        });
    }

    // Submit order and hide menu
    submitOrderButton.addEventListener('click', function() {
        const tableNumber = tableSelect.value;

        if (!tableNumber) {
            alert('Please select a table first');
            return;
        }

        if (currentOrders[tableNumber] && currentOrders[tableNumber].length > 0) {
            alert(`Bestelling voor tafel ${tableNumber} is ingediend.`);
            tableViews[tableNumber] = 'submitted';

            // Hide menu after submitting order
            menuSection.classList.add('hidden');

            // Show the order summary
            showOrderSummary(tableNumber);
            showReceivedOrderButton();
        } else {
            alert('No orders to submit.');
        }
    });

    // Show the order summary view
    function showOrderSummary(tableNumber) {
        orderSummary.classList.remove('hidden');
        summaryTable.textContent = tableNumber;
        summaryOrderList.innerHTML = '';
        let totalPrice = 0;

        currentOrders[tableNumber].forEach(order => {
            const listItem = document.createElement('li');
            listItem.textContent = `${order.name} - €${order.price}`;
            summaryOrderList.appendChild(listItem);
            totalPrice += parseFloat(order.price);
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Show "Customer has received the order" button
    function showReceivedOrderButton() {
        submitOrderButton.classList.add('hidden');
        receivedOrderButton.classList.remove('hidden');
        payReceiptButton.classList.remove('hidden');
    }

    // When "Customer has received the order" is clicked
    receivedOrderButton.addEventListener('click', function() {
        const tableNumber = tableSelect.value;

        if (!tableNumber || !currentOrders[tableNumber]) {
            alert('Please select a table first');
            return;
        }

        alert(`Order for Table ${tableNumber} has been marked as received.`);
        // After marking as received, hide the button
        receivedOrderButton.classList.add('hidden');
    });

    // When "Pay the Receipt" is clicked
    payReceiptButton.addEventListener('click', function() {
        alert('Bedankt voor uw betaling!');
        // Reset the order and UI
        resetOrderView();
    });

    // Reset order view
    function resetOrderView() {
        currentOrders = {};
        orderList.innerHTML = '<li>Nog geen bestellingen</li>';
        orderSummary.classList.add('hidden');
        menuSection.classList.remove('hidden');
        receivedOrderButton.classList.add('hidden');
        payReceiptButton.classList.add('hidden');
        submitOrderButton.classList.remove('hidden');
    }

    // Show menu view
    function showMenuView() {
        menuSection.classList.remove('hidden');
    }
});