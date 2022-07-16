import { mylists,mylist,updateTodo } from "./methods.js";
const changeTodo = ({ index, status }) => {
    mylist[index - 1].completed = status;
    localStorage.setItem('mylist', JSON.stringify(mylist));
    mylists();
  };
  const removeTodos = () => {
    const uncompletedTodos = mylist.filter((element) => element.completed !== true);
    const newTodos = uncompletedTodos.map((element, index) => {
      element.index = index + 1;
      return element;
    });
    localStorage.setItem('mylist', JSON.stringify(newTodos));
    updateTodo(newTodos);
  };

  export {changeTodo,removeTodos}