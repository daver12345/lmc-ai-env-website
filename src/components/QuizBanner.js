// File: src/components/QuizBanner.js
import React, { useState } from 'react';
import './QuizBanner.css';

function QuizBanner() {
  const questions = [
    {
      id: 1,
      type: 'multiple',
      question: 'How often do you use AI tools like ChatGPT, Gemini, or Copilot?',
      options: ['Daily', 'A few times a week', 'Rarely', 'Never'],
    },
    {
      id: 2,
      type: 'checkbox',
      question: 'What do you typically use AI for?',
      options: ['Writing', 'Coding', 'Summarizing text', 'Other'],
    },
    {
      id: 3,
      type: 'yesno',
      question: 'Do you use AI-generated summaries when browsing or searching the web?',
    },
    {
      id: 4,
      type: 'multiple',
      question: 'Do you leave AI features like autocomplete or smart suggestions on by default?',
      options: ['Yes', 'Sometimes', 'No'],
    },
    {
      id: 5,
      type: 'yesno',
      question: 'Have you ever considered the environmental impact of your digital tools?',
    },
    {
      id: 6,
      type: 'multiple',
      question: 'Do you know if your favorite platforms use renewable energy?',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      id: 7,
      type: 'multiple',
      question: 'Would you consider using an “eco-mode” for AI tools if it were available?',
      options: ['Yes', 'Maybe', 'No'],
    },
    {
      id: 8,
      type: 'slider',
      question: 'Estimate how many prompts you send to AI per day:',
      min: 0,
      max: 50,
      step: 1,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);
  };

  const handleSlider = (e) => {
    setAnswers({ ...answers, [currentQuestion.id]: e.target.value });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCheckboxToggle = (option) => {
    const updated = selectedCheckboxes.includes(option)
      ? selectedCheckboxes.filter((o) => o !== option)
      : [...selectedCheckboxes, option];
    setSelectedCheckboxes(updated);
    setAnswers({ ...answers, [currentQuestion.id]: updated });
  };

  const generateResultMessage = () => {
    const frequency = answers[1];
    const prompts = parseInt(answers[8] || 0);
    const consideredImpact = answers[5] === 'Yes';

    if (frequency === 'Daily' || prompts > 20) {
      return {
        label: 'High-Impact User',
        description: 'You rely heavily on AI tools, which can contribute significantly to your digital carbon footprint. Consider batching tasks and turning off unused features.'
      };
    } else if ((frequency === 'A few times a week' && prompts <= 20) || !consideredImpact) {
      return {
        label: 'Moderate User',
        description: 'Your AI use is moderate, but being more intentional with your queries and tool settings can help you reduce your environmental impact even further.'
      };
    } else {
      return {
        label: 'Low-Impact User',
        description: 'Your AI usage is minimal and thoughtful — great job staying mindful about your digital footprint!'
      };
    }
  };

  const renderIntro = () => (
    <div className="quiz-box">
      <h3>🌱 Discover Your AI Footprint</h3>
      <p style={{ marginBottom: '1.5rem' }}>
        Curious how your daily AI habits may be impacting the environment?
        Answer a few quick questions and get your AI impact profile — plus tips to reduce your footprint.
      </p>
      <button className="next-btn" onClick={() => setShowIntro(false)}>
        Start Quiz
      </button>
    </div>
  );

  const renderSummary = () => {
    const result = generateResultMessage();

    return (
      <div className="quiz-box">
        <h3>Your AI Usage Profile: <span style={{ color: 'var(--primary)' }}>{result.label}</span></h3>
        <p>{result.description}</p>
        <img
              src="https://assets.weforum.org/article/image/SA-JjBWAv4neEZkhXoL6P8Cq4_Xtrg5AqxooRdtETj4.jpg"
              className="quick-facts-image"
            />
        <button className="next-btn" onClick={() => { setShowIntro(true); setCurrentIndex(0); setAnswers({}); }}>
          Restart Quiz
        </button>
      </div>
    );
  };

  if (showIntro) return (
    <div className="quiz-banner">
      {renderIntro()}
    </div>
  );

  if (currentIndex >= questions.length) return (
    <div className="quiz-banner">
      {renderSummary()}
    </div>
  );

  return (
    <div className="quiz-banner">
      <div className="quiz-box">
        <h3>{currentQuestion.question}</h3>

        {currentQuestion.type === 'multiple' && (
          <div className="options">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt}
                className="quiz-option"
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'slider' && (
          <div className="slider-wrap">
            <input
              type="range"
              min={currentQuestion.min}
              max={currentQuestion.max}
              step={currentQuestion.step}
              value={answers[currentQuestion.id] || currentQuestion.min}
              onChange={handleSlider}
            />
            <div className="slider-value">
              {answers[currentQuestion.id] || currentQuestion.min} prompts/day
            </div>
            <button className="next-btn" onClick={handleNext}>Next</button>
          </div>
        )}

        {currentQuestion.type === 'yesno' && (
          <div className="options">
            {['Yes', 'No'].map((opt) => (
              <button
                key={opt}
                className="quiz-option"
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'checkbox' && (
          <div className="options">
            {currentQuestion.options.map((opt) => (
              <label key={opt} className="quiz-option checkbox">
                <input
                  type="checkbox"
                  checked={selectedCheckboxes.includes(opt)}
                  onChange={() => handleCheckboxToggle(opt)}
                />
                {opt}
              </label>
            ))}
            <button className="next-btn" onClick={handleNext}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizBanner;
