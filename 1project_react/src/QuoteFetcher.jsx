import { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  // useEffect(() => {
  //   async function getInitialQuote() {
  //     const response = await fetch(RANDOM_QUOTE_URL);
  //     const jsonResponse = await response.json();
  //     const randomQuote = jsonResponse.quote;
  //     setQuote(randomQuote);
  //   }
  //   getInitialQuote();
  // }, []);

  const fetchQuote = async () => {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  };

  useEffect(() => {
    fetchQuote();
  }, []); //this empty array means that that this useEffect will only run/or only run the callback inside it on only very first render/initial render after that it won't run again on future re-renders of the component
  //the real trick here is that we can't pass an async function to useEffect on it's own we have to wrap it inside synchronous fuction
  return (
    <div>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
      <Button variant="contained" onClick={fetchQuote}>
        get quote using handler
      </Button>
      <button onClick={fetchQuote}>get quote using handler</button>
    </div>
  );
}

//our effects callback have to be synchronous,that is the callbaacks in useEffect needs to be synchronous is what it means
