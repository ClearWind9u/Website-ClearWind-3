const item = [
  {name: 'Pizza 001', price: 6.9, quantity: 1},
  {name: 'Pizza 001', price: 6.9, quantity: 1},
  {name: 'Pizza 001', price: 6.9, quantity: 1},
]
const SHIPPING = 2;

function render(){
  let subTotal = 0;
  item.forEach(item =>{
    subTotal +=item.quantity * item.price
  })
  const total = subTotal + SHIPPING;
  
  $('sub-total').innerText = 
}