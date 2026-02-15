"use client";
import { useState } from "react";

export default function QuizPage() {
  const questions = [
    {
      question:
        "A 62-year-old man presents with nocturia, hesitancy and terminal dribbling. PSA 1.3 ng/ml. What is the most appropriate management?",
      options: [
        "Alpha-1 antagonist",
        "5 alpha-reductase inhibitor",
        "Non-urgent referral for TURP",
        "Empirical treatment with ciprofloxacin",
        "Urgent referral to urology",
      ],
      correct: 0,
    },
  ];

  const [selected, setSelected] = useState(null);
  const [score] = useState(83.3); // static for demo

  return (
    <div className="min-h-screen bg-[#f4f6f9] font-sans">

      {/* ================= NAVBAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

          <h1 className="text-xl font-bold text-blue-600">MDQuiz</h1>

          <div className="flex items-center gap-8 text-sm text-zinc-600">
            <span>Home</span>
            <span>About</span>
            <span className="text-blue-600 font-medium">Quiz</span>
            <span>Contact us</span>
            <div className="w-8 h-8 rounded-full bg-zinc-300" />
          </div>

        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-12 gap-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="col-span-8 bg-white p-10 rounded-xl shadow-sm">

          <h2 className="text-2xl font-semibold mb-6">
            Cardiology Quiz
          </h2>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full h-2 bg-blue-100 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: "47%" }}
              />
            </div>
            <p className="text-sm text-zinc-500 mt-2">47%</p>
          </div>

          {/* Question */}
          <p className="text-sm text-zinc-500 mb-4">
            Question 7/20
          </p>

          <p className="text-zinc-700 leading-relaxed mb-8">
            {questions[0].question}
          </p>

          {/* Options */}
          <div className="space-y-4">
            {questions[0].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`w-full text-left px-6 py-4 rounded-lg border transition 
                  ${
                    selected === index
                      ? "bg-blue-50 border-blue-600"
                      : "bg-zinc-100 border-transparent hover:bg-zinc-200"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button className="px-6 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50">
              Previous
            </button>

            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Next
            </button>
          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="col-span-4 space-y-6">

          {/* Score Card */}
          <div className="bg-blue-50 p-8 rounded-xl text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-700">
              {score}%
            </h3>
            <p className="text-sm text-zinc-600 mt-2">
              You got 5 answers correct
            </p>
          </div>

          {/* Question List */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((q, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-md text-sm flex justify-between items-center 
                  ${
                    q === 7
                      ? "border border-blue-600 bg-blue-50"
                      : "bg-zinc-100"
                  }`}
              >
                <span>Question {q}</span>
                {q <= 6 ? (
                  <span className="text-green-600">✔</span>
                ) : q === 7 ? (
                  <span className="text-blue-600">●</span>
                ) : (
                  <span className="text-zinc-400">○</span>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}
