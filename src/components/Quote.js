import quotes from "../utilities/quotes";
import { useState } from "react";

export default function Quote() {
  const [num, setNum] = useState(-1);
  function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (randomIndex !== num) {
      setNum(randomIndex);
    } else {
      getRandomIndex();
    }
  }
  return (
    <div>
      {num === -1 ? (
        <>
          <p>Click the Button to get a Quote.</p>
          <button onClick={getRandomIndex}>Get Quote</button>
        </>
      ) : (
        <>
          <blockquote>
            <p>{quotes[num].quote}</p>
            <footer>{quotes[num].author}</footer>
          </blockquote>
          <button onClick={getRandomIndex}>Get Another Quote</button>
        </>
      )}
    </div>
  );
}
