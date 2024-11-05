import { useState } from "react";

export default function Counter(){
    const [num , setNum] = useState(5);
    console.log('commponent has been executed again');
    console.log(`num:${num}`);
    const changeNum = ()=>{
        setNum(num+1);
        console.log(num);//niche jab onclick event hit hoga tab ye changnum call hoga jo num ko 1 se badhayega but usake bad immediatly ham console.log(num) kar rahe hai vaha par nam ki purani value print hogi increment karane se pehle vali kyuki after calling setNum itt doesn't update value of variable num which is after done by useState-useState updates it  fuction call hone ke bad jab line no 4 usestate call hoga tabhi num ki new value us par update hogi ,line 4--this is the line that runs to get the new value for num 
    }
    return(
        <div>
            <p>the num is : {num}</p>
            <button onClick={changeNum} >Increment</button>
        </div>
    );
}

//Imp--as soon as something changes in the state  whenever i call setNum react knows to re-rendered component in this case this component counter right that only happpens when we click 
//in this case wheenver that setNum runs react knows to re-run entire component basically re-render it ,the whole component will be executed again 
//so in order for us to see a new value being rendred or showing up in our browser window in the document that is the result of whole component being executed again whole things runs again 
//but useState will only  set value  on first time after that it will be ignored it will not set 5 everytime components re-runs it will be ignored 
//and the useState function what it will do is it will go and retrive correct value for num and fill it in this variable  num in ex of counter component  
//after first time when component re-renders what useState() will do is that it will go and retrive new value for whatever num is 

// the very first time it runs,

// num is going to be set to 5,

// setNum is set to our function that updates num.

// So we'll print out that there's been a render,

// we'll print out num, which will be 5.

// This function doesn't run, of course,

// it's not been executed yet.

// And then it returns this content

// with the current value of num, which is 5.

// And then this onClick,

// which, if we haven't clicked yet, nothing happens.

// As soon as I click this, changeNum is called,

// which calls setNum.

// This says to React we wanna update the value

// of that piece of state called num,

// and we're gonna set it to be 6.

// If it was 5, we add 1, it's now 6.

// What happens then is the whole component is run again,

// it's a function, the whole thing is executed again.

// That means this line runs first.

// It's just going from top to bottom.

// When this line runs the second time,

// instead of useState returning 5 for num,

// it will go and retrieve the new value for whatever num is,

// which happens to be 6.

// So num will now be 6 in this render.

// setNum will be set to that function that updates num.

// And then we print out, oh, it's been executed again.

// num is now set to 6,

// and then our content is returned, count is set to 6,

// and we see that change reflected in the document.

// So in order for us to see something new on the page,

// the whole function runs again.

// And useState is engineered in such a way

// that the first time it runs,

// it makes a new piece of state with this value.

// The second time, the third, the fourth, the fifth, whatever,

// instead of making a new piece of state,

// it goes and retrieves the value for num,

// and we'll fill it here, okay?

// So that's just an important thing to understand.

//*** --imp--Whenever we call a function to change a piece of state, our component re-renders.