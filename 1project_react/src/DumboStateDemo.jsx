import { useState } from "react"
function generateGameBoard(){
    return Array(400);
    console.log('rendered');
}
export default function DumboStateDemo(){
    const [board,setboard] = useState(generateGameBoard);//generateGameBoard --passing function,generateGameBoard()--executing function ,here pass in the useState only pass function name without paranthesis don't write it with paranthesis or it will execute everytime the component re-renders it is supposed run for only first time and should not run in the future re-renders of the component 
    return(
        <button onClick={()=>setboard('hello!!!')}>Click mi to chage the state</button>
    );
}