 
  const todoList = () => {
  all1 = []
  const add = (todoItem) => {
    all1.push(todoItem)
  }
  const markAsComplete = (index) => {
    all1[index].completed = true
  }

  const overdue = () => {
             // Write the Date Check Condition Here and Return the Array
             // of overdue items accordingly.
    return  all1.filter((Array) => Array.dueDate < new Date().toLocaleDateString("en-CA"));
  }

  const dueToday = () => {

             // Write the Date Check Condition Here and Return the Array
             // of todo items that are Due Later Accordingly.
    return all1.filter((Array) => Array.dueDate === new Date().toLocaleDateString("en-CA"));;
  }

  const dueLater = () => {
             // Write the Date Check Condition here and Return the Array
             // of todo items that are Due Later Accordingly.
   return all1.filter((Array) => Array.dueDate > new Date().toLocaleDateString("en-CA"));
  }

  const toDisplayableList = (list) => {
            // Format the To-Do list here, and return the output string
            // as per the format given above.
    return list.map(
      (TodoList) =>
        `[${TodoList.completed ? "x" : " "}] ${TodoList.title} ${
          TodoList.dueDate !== formattedDate(new Date()) ? TodoList.dueDate : ""
        }`).join("\n").trim();
  }

  return {
    all1,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};
// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({
  title: 'Submit assignment', dueDate: yesterday, completed: false
 })
todos.add({
   title: 'Pay rent', dueDate: today, completed: true 
  })
todos.add({ 
  title: 'Service Vehicle', dueDate: today, completed: false 
})
todos.add({
   title: 'File taxes', dueDate: tomorrow, completed: false
   })
todos.add({
   title: 'Pay electric bill', dueDate: tomorrow, completed: false 
  })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")

module.exports = todoList;
