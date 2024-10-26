document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const orderList = document.querySelector(".order-list");
    const totalElement = document.getElementById("total");
    const placeOrderButton = document.getElementById("place-order");

    // Updated menu items
    const menuItems = [
        { name:     "Burger", price:           10 },
        { name: "Pizza", price: 11 },
        { name: "Pasta", price: 12 },
        { name: "Hot Milk", price: 13 },
        { name: "Boiled Eggs", price: 14 },
        { name: "Corn Soup", price: 15 },
        { name: "Chicken Soup", price: 16 }
        // You can continue to add more items as needed
    ];

    // Initialize order and total
    const order = [];
    let total = 0.0;

    // Function to generate menu items
    const generateMenu = () => {
        menuItems.forEach((item, index) => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <span>${item.name}</span>
                <span>€ ${item.price.toFixed(2)}</span>
                <button onclick="addToOrder(${index})">Bestellen</button>
            `;
            menu.appendChild(menuItem);
        });
    };

    // Function to add an item to the order
    window.addToOrder = (index) => {
        const selectedItem = menuItems[index];
        order.push(selectedItem);
        total += selectedItem.price;

        const orderItem = document.createElement("li");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `
            <span>${selectedItem.name}</span>
            <span>€ ${selectedItem.price.toFixed(2)}</span>
        `;
        orderList.appendChild(orderItem);

        totalElement.textContent = `€ ${total.toFixed(2)}`;
    };

    // Function to place the order (you can customize this)
    placeOrderButton.addEventListener("click", () => {
        // Send the order to the server or perform other actions as needed
        alert("Order placed! Total amount: € " + total.toFixed(2));
    });

    // Initialize the menu
    generateMenu();
});