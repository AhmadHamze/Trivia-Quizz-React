import React, { useState } from 'react';
import { getQuizzData } from './api/quizz-api';
import QuestionCard from './components/question-card';

// importing types
import { QuestionExtended } from './api/quizz-api';
import { AnswerType } from './components/question-card';


const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionExtended[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerType[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  async function startQuizz() {
    setLoading(true);
    setGameOver(false);
    const quizQuestions = await getQuizzData();
    setQuestions(quizQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const isCorrect = questions[number].correct_answer === answer;
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
      const answerObject = {
        answer,
        correctAnswer: questions[number].question,
        isCorrect,
        question: questions[number].question,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }

  }

  function nextQuestion() {
    const nextQuest = number + 1;
    nextQuest === TOTAL_QUESTIONS? setGameOver(true): setNumber(nextQuest);
  }

  return (
    <div className="container">
      <h1>Trivia Quizz</h1>
      {gameOver? (<button className="startButton" onClick={startQuizz}>
        Start Quizz
      </button>): null}
      {!gameOver? (<p className="score">Score: {score}</p>) : null}
      {loading? (<p>Loading...</p>): null}
      {!loading && !gameOver? (<QuestionCard
        answers = {questions[number].answers}
        callback = {checkAnswer}
        question = {questions[number].question}
        questionNr = {number + 1}
        userAnswer = {userAnswers? userAnswers[number] : undefined}
        totalQuestions = {TOTAL_QUESTIONS}
      />): null}
      {!gameOver && !loading && userAnswers.length === number + 1?
       (<button className="next" onClick={nextQuestion}>
        {number !== TOTAL_QUESTIONS - 1? (<span>Next Question</span>): (<span>Restart Quizz</span>)}
      </button>): null}
    </div>
  );
}

export default App;
