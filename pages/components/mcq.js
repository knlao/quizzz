import React, { useState } from 'react';
import Choice from './choice.js';
import randomizeArray from './randomizeArray';

function MCQ(props) {
  const items = 4;
  const correctIndex = Math.floor(Math.random() * items);

  const [message, setMessage] = useState(" ");

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [total, setTotal] = useState(0);

  const words = randomizeArray(props.words);
  console.log(words);

  const [lastAttempt, setLastAttempt] = useState(false);

  function handleSubmit(index) {
    if (index === correctIndex) {
      setLastAttempt(true);
      setMessage("You got the correct answer!");
      setCorrect(correct + 1);
    } else {
      setLastAttempt(false);
      setMessage("You are wrong! The correct answer is " + words[correctIndex].word);
      setIncorrect(incorrect + 1);
    }
    setTotal(total + 1);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pb-3">Question: {words[correctIndex].definition}</h1>
      {words.filter((word, i) => i <= items - 1).map((word, i) => (
        <div key={i} className="border-2 rounded-md border-slate-500 my-4 px-3
        ">
          <Choice index={i} content={word.word} handleSubmit={handleSubmit}></Choice>
        </div>
      ))}
      <p className={`${lastAttempt === true ? "text-green-500" : "text-red-600"}`}>{message}</p>
      <p>Total: {total}</p>
      <p>Correct: {correct}</p>
      <p>Wrong: {incorrect}</p>
    </div>
  );
}

export default MCQ;
