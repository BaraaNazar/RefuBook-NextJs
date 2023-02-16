"use client"
import React, { useState, useEffect } from 'react';

interface Quote {
  content: string;
  author: string;
}

function RandomQuotes() {
  const [quote, setQuote] = useState<Quote>({ content: '', author: '' });

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data: Quote) => setQuote(data));
  }, []);

  return (
    <div className="text-lg text-center m-5">
      <p>{quote.content}</p>
      <h1 className="font-bold">- {quote.author}</h1>
    </div>
  );
}

export default RandomQuotes;
