const pizzas = [
    { name: "Margherita", description: "Classic pizza with tomato sauce and mozzarella", price: 8 },
    { name: "Pepperoni", description: "Pepperoni, tomato sauce, and mozzarella", price: 10 },
    { name: "BBQ Chicken", description: "BBQ sauce, chicken, and red onions", price: 12 },
    { name: "Veggie", description: "Bell peppers, onions, mushrooms, and olives", price: 9 },
    { name: "Hawaiian", description: "Ham, pineapple, and mozzarella", price: 11 }
];

const menuElement = document.getElementById('menu');
const orderElement = document.getElementById('order');
const totalElement = document.getElementById('total');

let order = [];

function renderMenu() {
    menuElement.innerHTML = '';
    pizzas.forEach((pizza, index) => {
        const pizzaElement = document.createElement('div');
        pizzaElement.className = 'pizza';
        pizzaElement.innerHTML = `
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <p>$${pizza.price.toFixed(2)}</p>
            <button onclick="addToOrder(${index})">Add to Order</button>
        `;
        menuElement.appendChild(pizzaElement);
    });
}

function renderOrder() {
    orderElement.innerHTML = '';
    order.forEach((item, index) => {
        const orderItemElement = document.createElement('div');
        orderItemElement.className = 'order-item';
        orderItemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromOrder(${index})">Remove</button>
        `;
        orderElement.appendChild(orderItemElement);
    });
    updateTotal();
}

function addToOrder(index) {
    order.push(pizzas[index]);
    renderOrder();
}

function removeFromOrder(index) {
    order.splice(index, 1);
    renderOrder();
}

function updateTotal() {
    const total = order.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }
    alert("Order placed successfully!");
    order = [];
    renderOrder();
}

renderMenu();
