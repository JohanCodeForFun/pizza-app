let cashInRegister = 100
const orderQueue: Order[] = [];
let orderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margerita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
]

function addnewPizza(pizzaObj: Omit<Pizza, "id">): void {
  const newPizza = { id: nextPizzaId++, ...pizzaObj }
  
  menu.push(newPizza)
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

addnewPizza({ name: "woowzi", price: 12 })
addnewPizza({ name: "veggie POW", price: 15 })
addnewPizza({ name: "BBQ veggie", price: 18 })
addnewPizza({ name: "no tomato sauce", price: 18 })

function placeOrder(pizzaname: string): Order | undefined {
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

console.log("menu:", menu)
