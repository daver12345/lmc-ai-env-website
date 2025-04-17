import React, { useState, useEffect } from 'react'; // ✅ Add useEffect
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
    setAnimationClass('slide-left');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
    }, 300); // Wait until slide-out finishes
  
    setTimeout(() => {
      setAnimationClass('');
    }, 600); // Give time to complete transition before resetting
  };
  
  const prevSuggestion = () => {
    setAnimationClass('slide-right');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length);
    }, 300);
  
    setTimeout(() => {
      setAnimationClass('');
    }, 600);
  };
  
  

  const [isHovered, setIsHovered] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // Auto-slide every 4.5 seconds except on hover
  useEffect(() => {
    if (isHovered) return;
  
    const interval = setInterval(() => {
      nextSuggestion();
    }, 4500);
  
    return () => clearInterval(interval);
  }, [isHovered]); // Re-run if hover changes

  return (
    <section id="suggestions" className="suggestions">
      <h2 className="suggestions-title">🌿 What You Can Do</h2>
      <div className="suggestion-box" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <button
          className="nav-arrow"
          onClick={prevSuggestion}
          aria-label="Previous suggestion"
        >
          <ArrowLeftCircle size={48} />
        </button>
        <p className={`suggestion-text ${animationClass}`}>{suggestions[index]}</p>
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
