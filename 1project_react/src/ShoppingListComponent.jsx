//the point of this shopping list is to demonstrate the flow of data where we pass data up from child to parent componentby jby exucuting a function that
//was passed down from parent so there is no real upward data flow where i can you know pass a prop to the parent but i can't
import { useState } from "react";
// import ShoppingListForm from "./shoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { v4 as uuid } from "uuid";
export default function ShoppingListComponent() {
  const [item, setItem] = useState([
    { id: uuid(), product: "eggs", quntity: 1 },
  ]);
  const addItem = (formItem) => {
    setItem((currItem) => {
      return [...currItem, { ...formItem, id: uuid() }];
    });
  };
  return (
    <div>
      {item.map((i) => {
        return (
          <li>
            {i.product}--{i.quntity}
          </li>
        );
      })}
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}
