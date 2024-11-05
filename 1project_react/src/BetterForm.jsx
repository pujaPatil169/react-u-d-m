import { useState } from "react";
export default function BetterForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const fieldValue = evt.target.value;
    setFormData((currData) => {
      return { ...currData, [changedField]: fieldValue };
    });
  };
  //currData in above function refers to the formData i.e state
  //in above we have used **computed property name syntax** in which we put the variable inside the square brackets then variable will be evaluated first and then the value of the variabel is putted on the place of variable which will act as key ,in this case key will be evt.target.name which is evaluated from the variable changefiled and same thing for the field value,
  //if you don't want to use the variable then you can write it as-- return { ...currData, [evt.target.name]: evt.target.Value };
  //  version1-- setFormData((currData) => {
  //                  currData[changedField]=fieldValue
  //                  return {...currData}
  //                  }
  //below is better version of writing above setFormData function which we have used in componet changehandler callback
  // better version-- setFormData((currData) => {
  //                      return { ...currData, [changedField]: fieldValue };
  //or you can writ3e teh above value as---return { ...currData, [evt.target.name]: evt.target.value };
  //                      }
  const handleSubmit = () => {
    console.log(formData);
  };
  //name needs to match with the key in the object that is passed to the useState()
  return (
    <div>
      <label htmlFor="firstname">firstname</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={formData.firstname}
        onChange={handleChange}
      />

      <label htmlFor="lastname">lastname</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

// 1. event.target
// What is it?
// event.target refers to the element that fired the event. For example, if you have a button and you click it, event.target will represent that button element.
// 2. event.target.name
// What is it?
// If the element has a name attribute (such as in form inputs), event.target.name will give the value of that name attribute. This is particularly useful when you're dealing with multiple form fields, as you can identify which field triggered the event based on its name.
