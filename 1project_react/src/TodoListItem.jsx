import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

export default function TodoListItem({
  todo,
  remove,
  handleToggleIsCompleted,
}) {
  const labelId = `checkbox-list-label-${todo.id}`;
  // const handleToggle = (todo) => {
  //   if (todo.isCompleted == true) {
  //     todo.isCompleted == false;
  //   } else {
  //     todo.isCompleted == true;
  //   }
  // };----here i am trying to change the state by modifiying isCompleted but it is not correct way to modify you need to use setTodo function in order incorporate the chage which you can only do in parent function where state exist
  //above way is wrong way of toggling ,it is wrong code

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => remove(todo.id)}
        >
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={() => handleToggleIsCompleted(todo.id)}
        dense
      >
        {/* the handleToggleIsCompleted will be called here and then after calling it will be invoked in parent component it will run there and modify isCompleted  same thing will happen for remove function which is being called in above lines */}
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.isCompleted}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={` ${todo.text}`} />
      </ListItemButton>
    </ListItem>
  );
}

//Notes

// So the way that a checkbox works in the real world

// is that we have to label a checkbox,

// otherwise it's just a meaningless box on its own.

// And then to label a checkbox, we use a label

// that we connect to that checkbox using some sort of id.

// The problem is when we do this in a list,

// we need to have some sort of unique id

// that we assign to each checkbox

// that we match to each ListItem.

// In this case, the ListItemText.

// If you notice there's an id prop here,

// and this is supposed to match whatever

// we put on the checkbox right here, inputProps.

// So labelId, this is all coming from Material UI.

// This can't just be some hard-coded value

// that's always the same.

// It has to be unique for each one of our items.

// So one approach is just to take a piece of text,

// like checkbox-list-label,

// and then throw in something in here,

// which could just be the value of the text of the todo.

// Or it could just be our todo.id even.

// It just needs to be something.

// And you could also just use the todo.id.

// The problem with that is that your id then

// becomes this label that's just

// a bunch of random numbers and letters.

// It's not very helpful to developers,

//-----passing function as a prop from parent to child component

// When you pass a function as a prop from the parent component to the child component, invoking that function in the child (for example, in an onClick event) will trigger the function that is defined in the parent component. This is how you can allow the child component to interact with and modify the state or behavior that is managed by the parent.

// Here’s a step-by-step breakdown:

// Function Defined in Parent: The parent component defines a function (e.g., toggleComplete or removeTodo) that modifies the state or performs some action.

// Function Passed as Prop to Child: The parent passes this function down to the child component as a prop.

// Child Component Calls the Function: In the child component, this function is triggered through some event (like onClick), causing the function in the parent to be executed.

// State Updated in Parent: Since the function is part of the parent component and it modifies the parent's state, React will re-render the parent and child components with the new state.

// const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.includes(value)}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
