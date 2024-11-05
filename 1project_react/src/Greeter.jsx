// export default function Greeter(props){
//     return(
//         <h1>hi theere {props.person}!!</h1>
//     )
// }

//we can also destructure person like in below code wich is alternative of above code ,destructuring person thats  the property i am expecting it to be passed in 

export default function Greeter({person='will',from='jack'}){
    return(
        <>
        <h1>hi theere {person}!!</h1>
        <h2>-{from}</h2>
        </>
    );
}

//we are setting default values for person ,from props /arguments
//we can also pass props that are objects or arrays 
//syntax for props/passing arguments--we use quotes for strings and everything else will be passed inside of the curly braces 
//that curly braces tells jsx treat this as javascript code 