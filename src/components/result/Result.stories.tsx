import { Story, Meta } from "@storybook/react/types-6-0";

import { Result, ResultProps } from "./Result";

export default {
  title: "Final Screen/Result",
  component: Result,
} as Meta;

const Template: Story<ResultProps> = (args) => <Result {...args} />;

export const ResultStory = Template.bind({});
ResultStory.args = {
  answers: [
    {
      question: "question 1",
      answer: "answer 1",
      isCorrect: true,
      correctAnswer: "answer 1",
    },
    {
      question: "question 2",
      answer: "answer 2",
      isCorrect: false,
      correctAnswer: "answer 3",
    },
    {
      question: "question 3",
      answer: "answer 3",
      isCorrect: true,
      correctAnswer: "answer 3",
    },
  ],
  score: 2,
  totalScore: 3,
};
