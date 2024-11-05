import { useState } from "react";

export default function CounterStateDemo(){
    const [count,setCount] =useState(0);
    const addOne = ()=>{
        setCount(count+1);//this is not correct way to change the state of the variable if new state depends uppon the previous one 
    }
    const addThree = () =>{
        setCount(currentCount =>currentCount+1);//this is correct way of changing state variable if it's value depends on old version of state variable
        setCount(currentCount =>currentCount+1);
        setCount(currentCount =>currentCount+1);
    }
    const setToTen = () =>{
        setCount(currentCount =>currentCount=10) //in this case everytime thhis function is called or setToTen button will be clicked the component will not be re-rendered beacuuase state variables values is not changing it is always 10 when you click that button
    }
    return(
        <div>
            <p>count:{count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>setToTeh</button>
        </div>
    );
    
}