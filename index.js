const menu = [
  { name: "Margerita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]

let cashInRegister = 100
const orderQeue = []
let orderId = 1

function addnewPizza(pizzaObj) {
  menu.push(pizzaObj)
}

// console.log(menu)

const newPizza = {
  name: "woowzi",
  price: 12
}

addnewPizza({  name: "woowzi", price: 12})
addnewPizza({  name: "veggie POW", price: 15})
addnewPizza({  name: "BBQ veggie", price: 18})

// console.log(menu)

function placeOrder(pizzaname) {
  const foundPizza = menu.find(pizzaObj => pizzaObj.name === pizzaname)
  cashInRegister += foundPizza.price

  const newOrder = { 
    id: orderId++,
    pizza: foundPizza, 
    status: "ordered"
  }

  orderQeue.push(newOrder)

  return newOrder
}

placeOrder("Margerita")
placeOrder("veggie POW")
placeOrder("BBQ veggie")
placeOrder("woowzi")

function completeOrder(orderId) {
  const order = orderQeue.find(order => order.id === orderId)
  order.status = "completed"

  return order
}

completeOrder(12)
completeOrder(2)
completeOrder(3)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Qeue:", orderQeue)


