import React from "react";

const HighlightCapsWords = ({ sentence, color }) => {
  // Function to check if a word is in all caps
  const isAllCaps = (word) => {
    return word === word.toUpperCase();
  };

  // Function to render sentence with highlighted words
  const renderHighlightedSentence = () => {
    const words = sentence.split(" ");
    return words.map((word, index) => {
      if (isAllCaps(word)) {
        return (
          <span key={index} style={{ color: color }}>
            {word}{" "}
          </span>
        );
      }
      return (
        <span key={index}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return <div>{renderHighlightedSentence()}</div>;
};

export default HighlightCapsWords;
