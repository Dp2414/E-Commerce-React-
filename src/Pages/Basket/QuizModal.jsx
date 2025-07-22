import React, { useState } from "react";
// import "./QuizModal.css"; // Create this for styling if needed

const questions = [
  {
    question: "What comes next in the series: 2, 4, 8, 16, ?",
    options: ["18", "24", "32", "20"],
    answer: "32",
  },
  {
    question: "Which shape has the most sides?",
    options: ["Triangle", "Hexagon", "Octagon", "Pentagon"],
    answer: "Octagon",
  },
  {
    question: "Find the odd one: Apple, Banana, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: "Carrot",
  },
  {
    question:
      "If you write all numbers from 1 to 100, how many times will 9 appear?",
    options: ["10", "19", "20", "9"],
    answer: "20",
  },
  {
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: "30",
  },
];

const QuizModal=({ show, onClose, onSubmit }) =>{
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score += 1;
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    onSubmit(score);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="quiz-modal">
        <h3>🧠 Quiz Time (Get Discount!)</h3>
        {questions.map((q, index) => (
          <div key={index}>
            <p>
              <strong>
                {index + 1}. {q.question}
              </strong>
            </p>
            {q.options.map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name={`q${index}`}
                  value={opt}
                  checked={answers[index] === opt}
                  onChange={() => handleSelect(index, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Submit Quiz
        </button>
        <button className="btn btn-secondary mt-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default QuizModal;