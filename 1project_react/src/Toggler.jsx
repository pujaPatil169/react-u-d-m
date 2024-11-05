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

//jab imogi simply p tag inside hote hai to quotes ki jarurat nai hai par agar vo {} braces mai hai to aab vo js hogai aur js mai hame quotes lagane ppadenge imogis ko