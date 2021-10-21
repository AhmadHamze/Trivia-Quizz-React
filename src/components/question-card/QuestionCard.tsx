import { Answer } from "../answer-tag/Answer";
import { Question } from "../question-tag/Question";

// First define the type of an answer given by the user
export type AnswerType = {
  answer: string;
  correctAnswer: string;
  isCorrect: boolean;
  question: string;
};

// These are the props used for the component
export type QuestionCardProps = {
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  question: string;
  questionNr: number;
  // the 'userAnswer' can be undefined in case there is no answers yet, this is how we define the type to be either
  // 'AnswerType' OR 'undefined'
  userAnswer: AnswerType | undefined;
  totalQuestions: number;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  answers,
  callback,
  question,
  questionNr,
  userAnswer,
  totalQuestions,
}) => (
  <div>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>
    <Question question={question} />
    <div>
      {/* for each answer return a div where the user can click a button to confirm the answer 
            if the user has given an answer the button will be disabled and a callback will be called
            to handle what happens when any button is clicked */}
      {answers.map((answer) => (
        <div key={answer}>
          <Answer
            state={
              userAnswer?.isCorrect === undefined
                ? "neutral"
                : userAnswer.answer === answer && userAnswer.isCorrect
                ? "correct"
                : userAnswer.answer === answer
                ? "false"
                : "neutral"
            }
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
          >
            {answer}
          </Answer>
        </div>
      ))}
    </div>
  </div>
);
