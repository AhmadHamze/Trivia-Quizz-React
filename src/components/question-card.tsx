import React from 'react';

// First 
export type AnswerType = {
    answer: string;
    correctAnswer: string;
    isCorrect: boolean;
    question: string;
}

// These are the props used for the component
type Props = {
    answers: string[];
    callback: any;
    question: string;
    questionNr: number;
    // the 'userAnswer' can be undefined in case there is no answers yet, this is how we define the type to be either
    // 'AnswerType' OR 'undefined' 
    userAnswer: AnswerType | undefined;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    answers,
    callback,
    question,
    questionNr,
    userAnswer,
    totalQuestions,
}) => (
    <div>
        <p className='question'>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {/* for each answer return a div where the user can click a button to confirm the answer 
            if the user has given an answer the button will be disabled and a callback will be called
            to handle what happens when any button is clicked */}
            {answers.map((answer) => (
                <div key={answer}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;