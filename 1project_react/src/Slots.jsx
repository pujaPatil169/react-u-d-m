export default function Slots({val1,val2,val3}){
    const isWinner = val1===val2 && val1 === val3;
    return(
        <div>
            <h1> {val1} {val2} {val3} </h1>
            <h2>{isWinner ? 'you win' : 'you loose' }</h2>
            {isWinner && <h3>congracts</h3>}
        </div>
    )
}

// {isWinner && <h3>congracts</h3>}--short circuit evaluation