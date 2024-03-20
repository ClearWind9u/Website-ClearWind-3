const item = [
  { name: 'Pizza 001', price: 5.9, quantity: 1 },
  { name: 'Pizza 002', price: 6.9, quantity: 1 },
  { name: 'Pizza 003', price: 7.9, quantity: 1 },
];
const SHIPPING = 2;

function render() {
  let subTotal = 0;
  item.forEach((item) => {
    subTotal += item.quantity * item.price;
  });
  const total = subTotal + SHIPPING;

  $('#sub-total').innerText = "$${subTotal.toFixed(2)}";
  $('#shipping').innerText = "$${SHIPPING}";
  $('#total').innerText = "$${total.toFixed(2)}";
}
function add() {}
render();
