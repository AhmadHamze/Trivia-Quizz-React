import { PrimaryQuestion } from "../question-tag/Question.stories";
import { Neutral, Correct, False } from "../answer-tag/Answer.stories";
import { Secondary } from "../../stories/Button.stories";
import { Button } from "../button/Button";

export default {
  title: "QuestionCard/Card",
};

export const Card = () => (
  <>
    <div>
      <Secondary label="Start quizz" backgroundColor="lightgreen"></Secondary>
    </div>
    <div>
      <PrimaryQuestion question="Question" />
    </div>
    <div>
      <Neutral>Answer</Neutral>
      <Correct>Answer</Correct>
      <False>Answer</False>
    </div>
    <div>
      <Button navigation={true}>Next</Button>
    </div>
  </>
);
