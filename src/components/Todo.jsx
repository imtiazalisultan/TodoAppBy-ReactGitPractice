import { TodoList } from "./TodoList";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]); //Destructures same as line 6-9
  //const state =useState([]);
  // const todos=state[0];
  // const setTodos=state[1];
  // console.log(state );
  

  useEffect(() => {
    console.log("Use effect on first Time");
    const stringTodos = localStorage.getItem("todos");
    // console.log(stringTodos);

    if (stringTodos) {
      const todos = JSON.parse(stringTodos);
      setTodos(todos);
    }
  }, []);
  
  useEffect(() => {
    console.log("Use Effect on ToDo Change");

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todo) => {
    // console.log("Delete from Todo",todo)
    const copy = [...todos];
    //console.log(copy.findIndex((el)=> el===todo));
    const index = copy.findIndex((el) => el === todo);

    copy.splice(index, 1);
    setTodos(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    //console.log("u click on this Function ");

    setTodos([...todos, e.target[0].value]);
    e.target[0].value = "";
    // console.log(todos);
  };

  return (
    <div>
      <h1>This is Home page of Todo Application</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add Task</button>
      </form>
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={handleDelete} />
      ) : (
        <h1>No Todos</h1>
      )}
    </div>
  );
};
export default Todo;
