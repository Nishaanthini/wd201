const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const currentDate = new Date();
    return all.filter(item => !item.completed && new Date(item.dueDate) < currentDate);
  };

  const dueToday = () => {
    const currentDate = new Date();
    return all.filter(item => !item.completed && new Date(item.dueDate).toISOString().split("T")[0] === currentDate.toISOString().split("T")[0]);
  };

  const dueLater = () => {
    const currentDate = new Date();
    return all.filter(item => !item.completed && new Date(item.dueDate) > currentDate);
  };

  const toDisplayableList = (list) => {
    let displayableList = '';

    displayableList += 'My Todo-list\n\n';

    const overdueTasks = overdue();
    const todayTasks = dueToday();
    const laterTasks = dueLater();

    if (overdueTasks.length > 0) {
      displayableList += 'Overdue\n';
      displayableList += listToDisplayableString(overdueTasks);
    }

    if (todayTasks.length > 0) {
      if (overdueTasks.length > 0) displayableList += '\n';
      displayableList += 'Due Today\n';
      displayableList += listToDisplayableString(todayTasks);
    }

    if (laterTasks.length > 0) {
      if (overdueTasks.length > 0 || todayTasks.length > 0) displayableList += '\n';
      displayableList += 'Due Later\n';
      displayableList += listToDisplayableString(laterTasks);
    }

    return displayableList;
  };

  const listToDisplayableString = (list) => {
    return list.map(item => {
      const status = item.completed ? '[x]' : '[ ]';
      const formattedDate = item.dueDate;
      return `${status} ${item.title} ${formattedDate}\n`;
    }).join('');
  };

  return {
    all,
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
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: 'Submit assignment', dueDate: '2022-07-21', completed: false });
todos.add({ title: 'Pay rent', dueDate: today, completed: true });
todos.add({ title: 'Service vehicle', dueDate: today, completed: false });
todos.add({ title: 'File taxes', dueDate: '2022-07-23', completed: false });
todos.add({ title: 'Pay electric bill', dueDate: '2022-07-23', completed: false });

console.log(todos.toDisplayableList());

module.exports = {
  todos
};