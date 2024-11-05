import ShoppingListItem from "./ShoppingListItem";
// export default function ShoppingList({items}){
//  return(
//    <div>
//     <ul>
//         {items.map(i=>(<li key={i.id} style={{
//             color:i.isPurchased ? 'grey' : 'red',
//             textDecoration:i.isPurchased ? 'line-through' : none
//         }}>{i.item}---{i.qty}</li>))}
//     </ul>
//    </div>
//  );
// }

//youre missing an key prop for an element in an iterator react needs an unique identifier for each element in the list  so that we  can keep track of that element if it changes it things  reorder  if elements are added or removed 

// export default function ShoppingList({items}){
//     return(
//       <div>
//        <ul>
//             {items.map(i=>(
//                 <ShoppingListItem key={i.id} {...i}/>
//             ))}
//        </ul>
//       </div>
//     );
//    }
   
//    <ShoppingListItem key={i.id} {...i}/> --here in {...i} here we are taking an entire object i and passing through every value as a prop individually
//below is longer version of passing props 

export default function ShoppingList({items}){
     return(
        
            <ul>
                {items.map((i)=>(
                    <ShoppingListItem 
                    key={i.id}
                    item={i.item}
                    qty={i.qty}
                    isPurchased={i.isPurchased}
                    />
                ))}
            </ul>
        
     );
}
