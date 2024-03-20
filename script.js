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
  const html = items.map(item => `
                         <li class="order-item">
          
          <span class="item-name">${item.name}</span>
          
          <span class="item-quantity">
            <button>-</button>
            <input type="item-number" value="${item.quantity}" />
            <button>+</button>
          </span>

          <span class="item-price">
            <span>$${(item.quantity * item.price).toFixed(2)}</span>
            <button>x</button>
          </span>
        </li>`).join('')
  
  document.getElementById('order-items').innerHTML = html
  document.getElementById('sub-total').innerText = `$${subTotal.toFixed(2)}`
  document.getElementById('shipping').innerText = `$${SHIPPING}`
  document.getElementById('total').innerText = `$${total.toFixed(2)}`
}
function add() {
  items.push({
    name: `Pizza ${Math.random()}`,
    quantity: 1,
    price: Math.random() * 10
  })
  render();
}
$('#btn-add').addEventListener('click',() =>{
  add()
})

render();
