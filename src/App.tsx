import React, { useState } from 'react';
import { getQuizzData } from './api/quizz-api';
import QuestionCard from './components/question-card';

// importing types
import { QuestionExtended } from './api/quizz-api';

function App() {

  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);
  const [questions, setQuestions] = useState<QuestionExtended[]>([]);
  const [userAnswers, setUserAnswers] = useState([]);

  async function startQuizz() {
    //setLoading(true);
    const quizQuestions = await getQuizzData();
    setQuestions(quizQuestions);
    setUserAnswers([]);
    setNumber(1);
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Trivia Quizz</h1>
      <button className="startButton" onClick={startQuizz}>
        Start Quizz
      </button>
      <p className="score">Score:</p>
      {loading? <p>Loading...</p>: null}
      {!loading? <QuestionCard
        answers = {questions[number].answers}
        callback = {() => {}}
        question = {questions[number].question}
        questionNr = {number}
        userAnswer = {userAnswers? userAnswers[number] : undefined}
        totalQuestions = {10}
      />: null}
    </div>
  );
}

export default App;
