//***this file has a very imp and tricky logic --we use current value change obj instead of state data which is formData.product.legth we will use evt.target.value.length--it contains current data value */
//logic is explain below code file
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quntity: "" });
  const [isProductValid, setIsProductValid] = useState(false);
  //   const validate = () => {
  //     if (formData.product.length == 0) {
  //       setIsProductValid(false);
  //     } else {
  //       setIsProductValid(true);
  //     }
  //   };--this is wrong way we won't use formdata.product.length anymore
  const validate = () => {
    if (product.length == 0) {
      setIsProductValid(false);
    } else {
      setIsProductValid(true);
    }
  };
  const handleChange = (evt) => {
    if (evt.target.name == "product") {
      validate(evt.target.value);
    }
    setFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (isProductValid) {
      addItem(formData);
      setFormData({ product: "", quntity: 0 });
    }
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
      {!isProductValid && (
        <p style={{ color: "red" }}>product name cannot be empty</p>
      )}
      <label htmlFor="quntity">quntity</label>
      <input
        type="number"
        name="quntity"
        id="quntity"
        value={formData.quntity}
        onChange={handleChange}
      />
      <button disabled={!isProductValid}>add item</button>
    </form>
  );
}

//agar hamane formData.product.length liya jo ki validate mai pass ho raha hai ,aur
// validate() functioin handlechange function mai call ho raha hai vo bhi setFormData
//se pehle react me value input karane ke baad jab setFormdata call hoga tab formData
// state ki nai value jo currently input me type kihe vo ayegi,setFormdata ke call hone
//  ke bad formData state mai nai value ayegi par ham validate ko use pehle call kar
//  rehe to vo formdata ki purani value consider karega aur samjo product field blank
// hai aur maine a type kiya to validate vale formdata.product.length zero rahega jab
// tak setform nai call hota matlab form re-rendered nai hota to is problem ko solve
//  karane ke liye ham formdata.product.lengeth use karane ke bajaye e object use karenge
//jo automatically handleChange event-handler mai pass ho raha hai jisme current value
//hogi input field mai type ki gayi
