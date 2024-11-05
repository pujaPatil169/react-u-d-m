import TextField from "@mui/material/TextField";
import MusicPlayerSlider from "./MusicPlayerSlider";
import { useState } from "react";
import { Box } from "@mui/material";
export default function FormDemo() {
  const [name, setName] = useState("");
  const updateState = (evt) => {
    setName(evt.target.value);
  };
  return (
    <Box
      className="form-container"
      sx={{ width: 700, border: "1px solid red", p: 2 }}
    >
      <MusicPlayerSlider />
      <h1>Name Is : {name} </h1>
      <TextField
        id="outlined-basic"
        label="Puppy Name"
        placeholder="fido"
        variant="outlined"
        value={name}
        onChange={updateState}
      />
    </Box>
  );
}

//this <TextFiled /> is build on top of the regular textfield behind the scenes
//in above sx {{p:2}} it is syntax for padding it uses multiplier to give value to it
//there 2 is not px or percentage or something it is(padding here) is two times the padding multiplier
//you can change the padding multiplier value,you can customise that if you set your own material theme
//there is typography element that wwe use to create headings and other pieces
//all of the components accepts sx prop where you can add custom styles
