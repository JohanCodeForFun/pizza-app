const menu = [
  { name: "Margerita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]

let cashInRegister = 100
const orderQueue: Order[] = [];
let orderId = 1

function addnewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj)
}

// console.log(menu)

type Order = {
  id: number
  pizza: Pizza
  status: string
}

type Pizza = {
  name: string;
  price: number
}

const newPizza = {
  name: "woowzi",
  price: 12
}

addnewPizza({  name: "woowzi", price: 12})
addnewPizza({  name: "veggie POW", price: 15})
addnewPizza({  name: "BBQ veggie", price: 18})

// console.log(menu)

function placeOrder(pizzaname: string) {
  const foundPizza = menu.find(pizzaObj => pizzaObj.name === pizzaname)
  if (foundPizza !== undefined) {
    cashInRegister += foundPizza.price

    const newOrder: Order = { 
      id: orderId++,
      pizza: foundPizza, 
      status: "ordered"
    }
  
    orderQueue.push(newOrder)
  
    return newOrder
  }

}

placeOrder("Margerita")
placeOrder("veggie POW")
placeOrder("BBQ veggie")
placeOrder("woowzi")

function completeOrder(orderId: number) {
  const order = orderQueue.find(order => order.id === orderId)
  if (order !== undefined) {
    order.status = "completed"
    
    return order
  }

}

completeOrder(12)
completeOrder(2)
completeOrder(3)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Qeue:", orderQueue)


