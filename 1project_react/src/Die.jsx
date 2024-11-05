export default function Die({numSides=6}){
   const roll = Math.floor(Math.random()*numSides)+1;
   return(
    <p>
        <h1>{numSides}--sided Die roll -{roll}</h1>
    </p>
   );
}