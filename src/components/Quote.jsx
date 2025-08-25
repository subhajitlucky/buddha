import React from 'react';
import './Quote.css';

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <p className="quote-text">"{text}"</p>
      <cite className="quote-author">- {author}</cite>
    </div>
  );
};

export default Quote;