   //heading--updating the state with an object (heere we not using primitive data types we are using objects/non primitive data types)
   
   import { useState } from "react"


// export default function ScoreKepper(){
//     const [score,setScore] = useState({p1Score:0,p2Score:0});
//     function increasePlayer1 (){
//         // {---score.p1Score +=1; 
//         //     console.log(score);
//         //     setScore(score)-------}this is wrong way of updating the p1Score it will change behind the scenes means console but the change won't be rendered means component won't re-rendered beacause
// //remember how object works behind the scenes when object is created in the memory its unique address remains the same even if you changes it's content it will still be same object/on same address before and after of the change 
// //Well, if we set the state to be the same object,
// // even if the insides of the object are different
// // if it's the same original object in memory,
// // react doesn't notice that it changed.
// // So what this means is anytime we set the state
// // with an array or an object, anything that is mutable
// // basically a non primitive type,
// // we have to set the state with a new object, a new array.
// // That means making a copy of the old data
// // and then changing it and sending that new version,
// // sending the copy to set scores.
//to make copy of the object/array we often use spread operator for ex  blah=[1,2,3]  ,blah1=[...blah] even if blah 1 will have same content as of blah but in memory blah1 will be completly different object that blah both have different and unique addreses in memory 
//blah1=[...blah] this make me a new object blah1 with the content of blah
//     }
//     return(
//         <div>
//             <p>player 1</p>
//             <p>player 2</p>
//             <button onClick={increasePlayer1}>+1 player 1</button>
//             <button>+2 player 2</button>
//         </div>
//     )
// }

//below code is correct way of updating scores of player 1 and player 2
export default function ScoreKepper(){
    const [score,setScore] = useState({p1Score:0,p2Score:0});
    function increasePlayer1(){
        setScore((oldScores)=>{
          return {...oldScores,p1Score:oldScores.p1Score+1}
        })
    }
    function increasePlayer2(){
        setScore((oldScores)=>{
            return {...oldScores,p2Score:oldScores.p2Score+1}
        });
    }
    return(
        <div>
            <p>player 1</p>
            <p>player 2</p>
            <button onClick={increasePlayer1}>+1Player1</button>
            <button onClick={increasePlayer2}>+1Player2</button>
        </div>
    );
}

// But the whole object is being reassigned

// as a new value in state.

// It's completely different from the old object.

// The, the insights might look similar

// but it's a different object in memory.
// When we work with arrays,

// we have to do the same thing where we make a copy

// of the existing array and then make our tweaks to it.

// When we work with the objects,

// we make a copy of the existing object and make our tweaks.

// It's kind of annoying, but you just have to tell yourself

// remember we don't mutate objects in place.

// We don't mutate arrays in the state.

// Instead, we always make a copy

// and the docs are very clear about this as well.

// react doesn't know that anything is different.

// It makes comparisons based on the identity

// of an object or of an element.

// So it can compare the number one and the number five,

// and tell that they're different immediately.

// But if it compares one object to another object

// it doesn't look at what's inside.

// It looks at their identity in memory.

//array is treated as object behind the scenes in memory 