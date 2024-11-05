import { useState } from "react";
import { useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   async function getInitialQuote() {
  //     const response = await fetch(RANDOM_QUOTE_URL);
  //     const jsonResponse = await response.json();
  //     const randomQuote = jsonResponse.quote;
  //     setQuote(randomQuote);
  //   }
  //   getInitialQuote();
  // }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote);
      setIsLoading(false); //jab data api se fetch hojayega matlab ajayega tab ham isLoading ko false set kar denge
    };
    fetchQuote();
  }, []); //this empty array means that that this useEffect will only run/or only run the callback inside it on only very first render/initial render after that it won't run again on future re-renders of the component
  //the real trick here is that we can't pass an async function to useEffect on it's own we have to wrap it inside synchronous fuction
  return (
    <div>
      {/* {isLoading && <P style={{ opacity: isLoading ? 1 : 0 }}>Loading...</P>}
      //or you can write above line other way as below  */}
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}

//our effects callback have to be synchronous,that is the callbaacks in useEffect needs to be synchronous is what it means
// And what's going to change is some dynamic style in here,

// oops, that needs to be nested as an object,

// where I'm gonna set the opacity to either be one or zero,

// depending on if isLoading is true.

// So I'll say opacity is based on isLoading.

// If isLoading is true, that means it should be visible.

// So I'll set opacity to 1.

// Otherwise I'll set it to 0.
