// export default function ColorList({colors}){
//      const Lis = colors.map(color=>(<li>{color}</li>));
//      return (
//         <>
//         <p>Color List</p>
//         <ul>{Lis}</ul>
//         </>
//      )

// }

//Lis -- this will be an array of li elements that's what map returns  it returns an array 
//taking an array of elements and rendering that array in our jsx
// In your case, the arrow function body is a single JSX expression, so parentheses allow you to use implicit return. This keeps the code concise and avoids needing the return keyword. If you use curly braces, you'd need to explicitly write return to make it work.

//below is another version of above code 
//in below code we are writing color logic inline
export default function ColorList({colors}){
    // const Lis = colors.map(color=>(<li>{color}</li>));
    return (
       <>
       <p>Color List</p>
       <ul>{colors.map(c=>(<li style={{color:c}}>{c}</li>))}</ul>
       </>
    )

}
