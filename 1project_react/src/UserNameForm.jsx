//evt.target refers to the inpput
//evt.target.value --value refers to the value from that event/in this case input
import { useState } from "react";

export default function UserNameForm() {
  const [username, setUsername] = useState("tom");
  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onClick={updateUsername}
      />
      <button>submit</button>
    </div>
  );
}

//we can't usr keywords such as for and class in react ,jsx beacause they are reserved here unlike html
//here in jsx ,js we use for keyword for loops and class to create a class which is not the case in html hence instead of using class as attribute we use className,and inplace of for we use htmlFor here
//html--for,class
//react/jsx--htmlFor,className
//computed property name syntax
