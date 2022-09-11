import { useEffect } from "react";
const TodoListItems=(props)=>{
    const todo=props.todo;
    const srNo=props.index ;
    const {onDelete}=props;

    //console.log("In list Items: ",props);

    // const handleDelete=()=>{
    //     onDelete(todo);
    // }
    // useEffect(()=>{
    //     console.log("ready todo in list Item");
    //   },[])
    ////////////changes
   

   // console.log({todo,srNo});
    return(
        <div>
            <li>{srNo+1}. {todo } <button onClick={onDelete}>Delete</button> </li>
            
        </div>
    )
}
export {TodoListItems}