"use client";
import { useState } from "react";

export default function PlayQuiz() {
  const questions = [
    {
      question: "Which movement emphasized minimal ornamentation and functional design?",
      options: [
        "Baroque",
        "Bauhaus",
        "Renaissance",
        "Art Nouveau",
      ],
      answer: 1,
    },
    {
      question: "Who founded the Bauhaus School?",
      options: [
        "Le Corbusier",
        "Walter Gropius",
        "Frank Lloyd Wright",
        "Mies van der Rohe",
      ],
      answer: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(`Quiz Finished! Your Score: ${score + (selected === questions[current].answer ? 1 : 0)}/${questions.length}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f6f4] flex items-center justify-center p-6 font-serif">

      <div className="w-full max-w-3xl bg-white border rounded-lg shadow-sm p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              Question {current + 1} / {questions.length}
            </p>
            <div className="w-48 h-1 bg-zinc-200 mt-2">
              <div
                className="h-1 bg-black"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              Score
            </p>
            <p className="text-xl font-semibold">{score}</p>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold leading-snug mb-8">
          {questions[current].question}
        </h2>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-full text-left px-6 py-4 border rounded-md transition 
                ${
                  selected === index
                    ? "bg-black text-white border-black"
                    : "bg-white hover:bg-zinc-50"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="w-full bg-black text-white py-3 uppercase tracking-widest text-xs font-semibold hover:bg-yellow-500 hover:text-black transition disabled:opacity-40"
        >
          {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>

      </div>
    </div>
  );
}
