import ListItem from "@mui/material/ListItem";
import TodoListItem from "./TodoListItem";
import { useState } from "react";
import List from "@mui/material/List";
const initialTodositems = [
  { id: 1, text: "walking dog", isCompleted: false },
  { id: 2, text: "walking g", isCompleted: true },
  { id: 3, text: "walking d", isCompleted: false },
];
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodositems);
  //   const removeTodo = (id) => {
  //     setTodos((currTodo) => {
  //       currTodo.filter((i) => {
  //         if (i.id !== id) {
  //           return i;
  //         }
  //       });
  //     });
  //   };//-----this written by me it has some mistakes

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((i) => i.id !== id);
    });
  };

  const handleToggleIsCompleted = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          remove={removeTodo}
          handleToggleIsCompleted={handleToggleIsCompleted}
        />
      ))}
    </List>
  );
}

//notes

//in above mapping function we are using implicit return by putting todolistitem inside parenthesis or other option is you can specify the return statement there to return

// When you pass a function as a prop from the parent component to the child component, invoking that function in the child (for example, in an onClick event) will trigger the function that is defined in the parent component. This is how you can allow the child component to interact with and modify the state or behavior that is managed by the parent.

// Here’s a step-by-step breakdown:

// Function Defined in Parent: The parent component defines a function (e.g., toggleComplete or removeTodo) that modifies the state or performs some action.

// Function Passed as Prop to Child: The parent passes this function down to the child component as a prop.

// Child Component Calls the Function: In the child component, this function is triggered through some event (like onClick), causing the function in the parent to be executed.

// State Updated in Parent: Since the function is part of the parent component and it modifies the parent's state, React will re-render the parent and child components with the new state.

//but when i refresh the initial state is not using from local storage
