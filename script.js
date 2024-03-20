const items = [
  { name: "Pizza 001", price: 5.9, quantity: 1 },
  { name: "Pizza 002", price: 6.9, quantity: 1 },
  { name: "Pizza 003", price: 7.9, quantity: 1 },
];
const SHIPPING = 2;

function add() {
  items.push({
    name: `Pizza ${Math.random()}`,
    quantity: 1,
    price: Math.random() * 10
  })
  render();
}

function remove(index){
  items.splice(index, 1)
  render();
}

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
            <button class="dec">-</button>
            <input type="item-number" value="${item.quantity}" />
            <button class='inc'>+</button>
          </span>

          <span class="item-price">
            <span>$${(item.quantity * item.price).toFixed(2)}</span>
            <button class="delete btn-delete">x</button>
          </span>
        </li>`).join('')
  
  document.getElementById('order-items').innerHTML = html
  
  const deleteButtons = [ ...document.querySelectorAll('.delete')]
  for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', () => {
      remove(i);
    })
  }
  
  document.getElementById('sub-total').innerText = `$${subTotal.toFixed(2)}`
  document.getElementById('shipping').innerText = `$${SHIPPING}`
  document.getElementById('total').innerText = `$${total.toFixed(2)}`
}

document.getElementById('btn-add').addEventListener('click',() =>{
  add()
})

render();