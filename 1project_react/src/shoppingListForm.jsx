import { useState } from "react";
//we have a concept in react if anything ever changes in the component it supposed to be within the state of that component unlike javascript
//here state is bound to the input whatever you see in the input filed is what is in state,as soon as you type something in input filed react is going to know right away beacause we are gonna have onChange event set on the input
//so we are  gonna make this input elemnts that react is gonna fully control using state and they are called as controlled components
//so whatever the piecce of state is it is always going to be shown in the input beacaue of value attribute set with the state on input field
//here basically formdata state is bound to the value attribute of inputs they are in sync
export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quntity: "" });
  const handleChange = (evt) => {
    setFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    addItem(formData);
    setFormData({ product: "", quntity: 0 });
  };
  //addItem ham log call yaha kar rahe par ye call parent component me horaraha hai yisliye is me jo data hamane pass kiya jaise ki formData vo abb parent component mai chala jayeta is ke sath
  //here in this case basically data is flowing up i.e from child to parent
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="product">product name</label>
      <input
        type="text"
        name="product"
        id="procuct"
        value={formData.product}
        onChange={handleChange}
      />
      <label htmlFor="quntity">quntity</label>
      <input
        type="number"
        name="quntity"
        id="quntity"
        value={formData.quntity}
        onChange={handleChange}
      />
      <button>add item</button>
    </form>
  );
}
