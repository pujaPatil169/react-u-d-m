export default function ListPicker({values}){
    const randIdx= Math.floor(Math.random()*values.length)
    const randValues = values[randIdx]
    return(
        <div>
            <p>
                the list of values are --{values}<br/>
                random value is --{randValues}

            </p>
        </div>
    );
}


    // {/* <ListPicker values={[1,2,3]}/>
    // <ListPicker values={{a:1,b:2}}/>
    //   <Greeter person="todd" from="emii"/>
    //   <Greeter person="colt"/>
    //   <Greeter  from="ron"/>
    //   <Die numSides={20}/>
    //   <Die numSides={6}/> */}
    //   <Die numSides={10}/>
    //   <ListPicker values={[1,2,3]}/>
    //   <ListPicker values={{a:1,b:2}}/>