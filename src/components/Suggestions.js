import React, { useState } from 'react';
import { ArrowRightCircle, ArrowLeftCircle } from 'lucide-react';

function Suggestions() {
  const suggestions = [
    '🔌 Turn off AI features when not needed (like Smart Compose or AI Overview).',
    '🌞 Support platforms powered by renewable energy.',
    '🧠 Be mindful of excessive or redundant queries.',
    '🚴 Offset your carbon footprint through sustainability projects.',
  ];

  const [index, setIndex] = useState(0);

  const nextSuggestion = () => {
    setIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
  };

  const prevSuggestion = () => {
    setIndex((prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length);
  };

  return (
    <section id="suggestions" className="suggestions">
      <h2 className="suggestions-title">🌿 What You Can Do</h2>
      <div className="suggestion-box">
        <button
          className="nav-arrow"
          onClick={prevSuggestion}
          aria-label="Previous suggestion"
        >
          <ArrowLeftCircle size={48} />
        </button>
        <p className="suggestion-text">{suggestions[index]}</p>
        <button
          className="nav-arrow"
          onClick={nextSuggestion}
          aria-label="Next suggestion"
        >
          <ArrowRightCircle size={48} />
        </button>
      </div>
    </section>
  );
}

export default Suggestions;
