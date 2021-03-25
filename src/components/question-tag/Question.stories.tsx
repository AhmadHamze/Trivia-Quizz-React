import { Story, Meta } from '@storybook/react/types-6-0';

import { Question, QuestionProps } from './Question';

export default {
    title: 'QuestionCard/Question',
    component: Question,
    args: {
        question: 'Question'
    }
} as Meta;

const Template: Story<QuestionProps> = (args) => <Question {...args}/>;

export const PrimaryQuestion = Template.bind({});
PrimaryQuestion.args = {

}

export const SecondaryQuestion = Template.bind({});
SecondaryQuestion.args = {
    primary: false,
}