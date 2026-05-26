"use client";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

import { useEffect, useState } from "react";

export default function QuotesPage() {
  const [quoteData, setQuoteData] = useState<Quote[]>([]);
  //   const [quoteNo, setQuoteNo] = useState(0);
  const [quoteToView, setQuoteToView] = useState<Quote>();

  useEffect(() => {
    GetAllQuotes();
  }, []);

  const randomizeQuote = () => {
    //hint use Math.random()
    const newNumber = Math.floor(Math.random() * quoteData.length) + 1;
    setQuoteToView(quoteData[newNumber]);
    console.log(newNumber);
  };

  const GetAllQuotes = async () => {
    await fetch("https://dummyjson.com/quotes")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Couldn't fetch Quotes");
        }
        return response.json();
      })
      .then((data) => {
        setQuoteData(data.quotes);
        // set initial quote here
        setQuoteToView(data.quotes[0]);
        console.log("quotes from dummy data", data);
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl bg-amber-600 ">Quotes Generator</h1>
      <div>
        <>
          <h4>{quoteToView?.quote}</h4>
          <p>{quoteToView?.author}</p>
        </>
        <button onClick={randomizeQuote}>Randomize</button>
      </div>
      {/* <div>Aurthor</div> */}
    </div>
  );
}
