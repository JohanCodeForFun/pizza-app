type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

const users: User[] = [
  { id: 1, username: "Adam", role: "member" },
  { id: 2, username: "Eve", role: "admin" },
  { id: 3, username: "Chad", role: "contributor" },
]

function updateUser(id: number, updates: any) {
  const userToUpdate = users.find(user => user.id === id)
  if (!userToUpdate) {
    console.error("User not found.")
    return
  }
  Object.assign(userToUpdate, updates)
}

console.log("before", users)

updateUser(1, {username: "Charles"})
updateUser(3, {role: "CEO"})

console.log("after", users)