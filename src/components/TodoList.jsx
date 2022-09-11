import { TodoListItems } from "./TodoListItems";
import { useEffect } from "react";

const TodoList = (props) => {
  const todos = props.todos;

const {onDelete}=props;

useEffect(()=>{
  console.log("ready todo in List");
},[])
//console.log("props in Todo list: ",onDelete);
  //const listItems=
  //   for(let todo of todos){
  //     listItems.push(<TodoListItems todo={todo} /> );
  //   }
  //   console.log(listItems);

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return <TodoListItems onDelete={()=>onDelete(todo)} todo={todo} index={index} key={index} />;
        })}
      </ul>
    </div>
  );
};
export { TodoList };
