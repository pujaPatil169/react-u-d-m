import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
  const randomEmoji = () => {
    const choices = ["🫣", "🤫", "🤗", "🌺", "🍁", "🏵️"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
  const [emojis, setEmoji] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmoji((oldArray) => {
      return [...oldArray, { id: uuid(), emoji: randomEmoji() }];
    });
  };
  const deleteEmoji = (id) => {
    setEmoji((previousArray) => {
      return previousArray.filter((a) => a.id !== id); //a referss to the individual element of an array,this callback function inside setEmoji will return new array which is filtered version of old array
    });
  };
  const makeAllFlower = () => {
    setEmoji((previousArray) => {
      return;
      previousArray.map((item) => {
        return { ...item, emoji: "🏵️" };
      });
    });
  };
  return (
    <div>
      {emojis.map((e) => {
        return (
          <span
            onClick={() => deleteEmoji(e.id)}
            key={e.id}
            style={{ fontSize: "4rem" }}
          >
            {e.emoji}
          </span>
        );
      })}
      <button onClick={addEmoji}>addEmoji</button>
      <button onClick={makeAllFlower}>makeAllFlower</button>
    </div>
  );
}

{
  /* <span onClick={deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>-----this is wrong way of passing e.id to deleteEmoji kyuki yaha par ye immediatly execute ho jayega beacause of paranthesis which we don't want hence we will use calll back function inline which will execute on clicking the button */
}

//the easiaest way to remove an element from an array is to without mutating the original is to use filter to make a copy of it excluding thtat item that we want to remove
