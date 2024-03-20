const items = [
  { name: "Pizza 001", price: 5.9, quantity: 1 },
  { name: "Pizza 002", price: 6.9, quantity: 1 },
  { name: "Pizza 003", price: 7.9, quantity: 1 },
];
const SHIPPING = 2;

function render() {
  let subTotal = 0;
  items.forEach((item) => {
    subTotal += item.quantity * item.price;
  });
  const total = subTotal + SHIPPING;
  const html = items.map

  document.getElementById('sub-total').innerText = `$${subTotal.toFixed(2)}`;
  document.getElementById('shipping').innerText = `$${SHIPPING}`;
  document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}
function add() {
  items.push({
    name: 'Pizza ${Math.random()}',
    quantity: 1,
    price: Math.random() * 10
  })
}
render();
