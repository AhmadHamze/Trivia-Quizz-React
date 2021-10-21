import { Story, Meta } from "@storybook/react/types-6-0";
import { QuestionCard, QuestionCardProps } from "./QuestionCard";

export default {
  title: "QuestionCard/Card",
  component: QuestionCard,
} as Meta;

const Template: Story<QuestionCardProps> = (args) => <QuestionCard {...args} />;

export const QuestionCardNoAnswerYet = Template.bind({});
QuestionCardNoAnswerYet.args = {
  answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  question: "question 1",
  questionNr: 1,
  userAnswer: undefined,
  totalQuestions: 10,
};

export const QuestionCardCorrectAnswerGiven = Template.bind({});
QuestionCardCorrectAnswerGiven.args = {
  answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  question: "question 1",
  questionNr: 1,
  userAnswer: {
    question: "question 1",
    answer: "answer 2",
    correctAnswer: "answer 2",
    isCorrect: true,
  },
  totalQuestions: 10,
};
export const QuestionCardWrongAnswerGiven = Template.bind({});
QuestionCardWrongAnswerGiven.args = {
  answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  question: "question 1",
  questionNr: 1,
  userAnswer: {
    question: "question 1",
    answer: "answer 3",
    correctAnswer: "answer 2",
    isCorrect: false,
  },
  totalQuestions: 10,
};
