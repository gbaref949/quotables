import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const apiUrl = 'https://api.quotable.io/random';

  const fetchQuote = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch quote: ${response.statusText}`);
      }

      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleReload = () => {
    setIsLoading(true);
    setIsError(false);
    fetchQuote();
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error fetching quote...</h1>
      </div>
    );
  }

  return (
    <div>
      <p>"{quotes.content}"</p>
      <p>- {quotes.author}</p>
      <button
        style={{
          margin: '10rem',
          height: '50px',
          width: '80px',
          textAlign: 'center',
        }}
        className='btn'
        onClick={handleReload}
      >
        Reload Quotes
      </button>
    </div>
  );
};

export default Quotes;