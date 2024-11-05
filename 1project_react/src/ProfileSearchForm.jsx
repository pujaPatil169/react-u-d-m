//colt--so i have made this two component that searches github API bassed on the username
import { useState } from "react";
export default function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");

  const handleChange = (evt) => {
    setTerm(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(term);
    setTerm("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        type="text"
        value={term}
        name="username"
        id="username"
        onChange={handleChange}
      />
      <button>search!</button>
    </form>
  );
}

//the value attribute set to term in the input field will bind the state wwhich is term with the input field--this way this input field will beacome controlled component
