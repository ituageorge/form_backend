import React, { useState} from 'react';

import {uuid} from 'uuidv4';
// import { uuid } from uuid4

import {questions} from './';


// import './styles.css';



 const QuestionApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="w-full h-3/5 rounded-lg p-2 flex leading-loose">
      {showScore ? (
        <div className="items-center flex text-base">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className='flex flex-col lg:flex-row w-full'>
          <div className="flex text-4xl italic hover:not-italic w-full text-white">
            <div className="mb-6 m-4">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className=" w-full text-black p-4">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (

                <button onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    key={index}
                className="bg-gradient-to-r from-blue-500 to-blue-300 font-bold my-3 py-3 tracking-widest text-white text-left">      
                   {answerOption.answerText}
              </button>

              ),
            )}
          </div>
        </div>
      )}
     
    </div>
  );
};

export default QuestionApp
