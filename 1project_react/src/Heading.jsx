export default function Heading({color,text,fontSize}){
    return(
        <>
        <h1 style={{color:color,fontSize:fontSize}}>{text}</h1>
        </>
    )
}