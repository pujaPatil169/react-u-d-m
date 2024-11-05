// function btnClickHandler(){
//     alert({message})
// }

// export default function Clicker({message,buttonText}){
//     return(
//         <button onClick={btnClickHandler}>{buttonText}</button>
//     )
// }

//the above is wrong mistaken it gets an error message not defined b

export default function Clicker({message,buttonText}){
    const btnClickHandler = () =>{
        alert(message);
    };
    return(
        <button onClick={btnClickHandler}>{buttonText}</button>
    )
}