const menu: Pizza[] = [
  { id: 1, name: "Margerita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue: Order[] = [];
let orderId = 1

function addnewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj)
}

type Order = {
  pizza: Pizza
  status: "ordered" | "completed"
}

type Pizza = {
  id: number
  name: string;
  price: number
}

type Identifier = {
  input: string | number
}

const newPizza = {
  name: "woowzi",
  price: 12
}

addnewPizza({ id: 5, name: "woowzi", price: 12 })
addnewPizza({ id: 6, name: "veggie POW", price: 15 })
addnewPizza({ id: 7, name: "BBQ veggie", price: 18 })
addnewPizza({ id: 8, name: "no tomato sauce", price: 18 })

function placeOrder(pizzaname: string) {
  const foundPizza = menu.find(pizzaObj => pizzaObj.name === pizzaname)
  if (!foundPizza) {
    console.error(`${pizzaname} not found.`)
    return
  }

  cashInRegister += foundPizza.price

  const newOrder: Order = {
    pizza: foundPizza,
    status: "ordered"
  }

  orderQueue.push(newOrder)

  return newOrder

}

placeOrder("Margerita")
placeOrder("veggie POW")
placeOrder("BBQ veggie")
placeOrder("woowzi")
placeOrder("no tomato sauce")

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find(order => order.pizza.id === orderId);
  if (order !== undefined) {
    order.status = "completed";
    return order;
  }
  
  return undefined;
}

completeOrder(1)
completeOrder(5)
completeOrder(8)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Qeue:", orderQueue)


function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } else if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter `identifier` must be either a string or a number")
  }
}

console.log(getPizzaDetail(2))
console.log(getPizzaDetail(3))
console.log(getPizzaDetail(5))