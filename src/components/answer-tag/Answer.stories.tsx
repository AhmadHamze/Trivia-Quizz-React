import { Story, Meta } from "@storybook/react/types-6-0";

import { Answer, AnswerProps } from "./Answer";

export default {
  title: "QuestionCard/Answer",
  component: Answer,
  args: {
    children: "Answer",
  },
} as Meta;

const Template: Story<AnswerProps> = (args) => <Answer {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  state: "neutral",
  children: "Answer",
};

export const Correct = Template.bind({});
Correct.args = {
  state: "correct",
  children: "Answer",
};
export const False = Template.bind({});
False.args = {
  state: "false",
  children: "Answer",
};
