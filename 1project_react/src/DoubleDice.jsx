// export default function DoubleDice(){
//    const num1 = Math.floor(Math.random()*3)+1;
//    const num2 = Math.floor(Math.random()*3)+1;
//    const result = num1===num2 ? 'You Win' : 'You Loose' ;
//    return (
//     <div>
//         <h1>{result}</h1>
//         <h2>num1:{num1}</h2>
//         <h2>num2:{num2}</h2>
//     </div>
//    )
// }

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random()*3)+1;
//     const num2 = Math.floor(Math.random()*3)+1;
//     return (
//      <div>
//          <h1>{num1===num2 ? 'You Win' : 'You Loose'}</h1>
//          <h2>num1:{num1}</h2>
//          <h2>num2:{num2}</h2>
//      </div>
//     )
//  }

// {num1===num2 ? 'You Win' : 'You Loose'}--this is use case of ternary opertor
// A lot of the time we use the ternary operator

// just directly in line.

// And if you're not comfortable

// with a ternary operator in JavaScript,

// I definitely recommend that you get comfortable with it,

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random()*3)+1;
//     const num2 = Math.floor(Math.random()*3)+1;
//     return (
//      <div>
//          <h1>Double Dice</h1>
//          {num1===num2 ? <h2>you win</h2> : null }
//          <h2>num1:{num1}</h2>
//          <h2>num2:{num2}</h2>
//      </div>
//     )
//  }

// Optional null rendering: The null in the ternary operator is fine, but it's more common to use the short-circuiting && in React for conditional rendering, making the code simpler.


// another way of selectively rendering something using &&
export default function DoubleDice(){
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const isWinner = num1===num2;
    // const styles = {color:'purple',fontSize:"40px"}
    const styles = {color: isWinner ? 'green' : 'red'}
    return (
     <div className="DoubleDice" style={styles} >
         <h1>Double Dice</h1>
         {isWinner && <h2>You Win</h2>}
         <h2>num1:{num1}</h2>
         <h2>num2:{num2}</h2>
     </div>
    )
 }
//  <div className="DoubleDice" style={styles} > this line will look like below
// {/* <div className="DoubleDice" style={{color:'purple',fontSize:"40px"}s} > here in style the first curly brace is to escape jsx it says i am writing javaascript the second pair defines an object  */}

//  {num1===num2 && 'you win'}--this line in above code means agar num1==num2 true hua tohi second condition pe control jata hai 
//  And if you remember how the double ampersand's

// logical and operator works, if this is false, whoops,

// this side won't even bother running, it's short circuits.

// If this is true, meaning we win,

// then this is run and this will be rendered.

// So this is just a shortcut,

// another way of selectively rendering something

//dynaminc styling --styles that change we put them inline if there are static wwe add them in the seperate stylesheet 

// So, I wouldn't put any regular styles in this object.

// If they're not gonna change, put them in the CSS style sheet

// with the rest of your styles.

// If I want everything in here to have the same font,

// the same, you know, border, whatever it is,

// if it's not gonna change, just put it in a style sheet.

// If it's dynamic in any way though, use the style attribute.

//css --font-size  (we use kebab casing here )
//javascritp -- fontSize  (we use camel casing here )