
import { useState } from "react";

export default function Toggler(){
    const [isHappy,setIsHappy] = useState(true);//here useState is seeting an initial value of isHapppy which is true
    const ToggleIsHappy = () => setIsHappy(!isHappy);
    return(
        <p className="Toggler" onClick={ToggleIsHappy}>
            {isHappy ? "🙂" : "😔" }  
        </p>
    );
}