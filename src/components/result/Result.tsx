import { AnswerType } from "../question-card/QuestionCard";
import "./result.css";

export interface ResultProps {
  answers: AnswerType[];
  score: number;
  totalScore: number;
}

export const Result: React.FC<ResultProps> = ({
  answers,
  score,
  totalScore,
}) => {
  return (
    <div>
      <table>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
        </tr>
        {answers.map((answer) => (
          <tr>
            <td>
              <span dangerouslySetInnerHTML={{ __html: answer.question }} />
            </td>
            <td>
              <span dangerouslySetInnerHTML={{ __html: answer.answer }} />
            </td>
            <td>
              <span
                dangerouslySetInnerHTML={{ __html: answer.correctAnswer }}
              />
            </td>
          </tr>
        ))}
      </table>
      <div>
        You Scored {score}/{totalScore}
      </div>
    </div>
  );
};
