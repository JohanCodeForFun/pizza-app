type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "Adam", role: "member" },
  { id: nextUserId++, username: "Eve", role: "admin" },
  { id: nextUserId++, username: "Chad", role: "contributor" },
]

function updateUser(id: number, updates: UpdatedUser) {
  const userToUpdate = users.find(user => user.id === id)
  if (!userToUpdate) {
    console.error("User not found.")
    return
  }
  Object.assign(userToUpdate, updates)
}

function addUser(user: Omit<User, "id">): User {
  const userToAdd: User = {
    id: nextUserId,
    ...user
  }

  users.push(userToAdd)

  return userToAdd
}

console.log("before", users)

updateUser(1, { username: "Charles" })
updateUser(3, { role: "admin" })

addUser({ username: "joe_schmoe", role: "member" })
addUser({ username: "jane_schmoe", role: "contributor" })

console.log("after", users)