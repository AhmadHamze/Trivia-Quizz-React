import { Story, Meta } from '@storybook/react/types-6-0';

import { Answer, AnswerProps } from './Answer';

export default {
    title: 'QuestionCard/Answer',
    component: Answer,
    args: {
        children: 'Answer'
    }
} as Meta;

const Template: Story<AnswerProps> = (args) => <Answer {...args}/>;

export const PrimaryAnswer = Template.bind({});
PrimaryAnswer.args = {

}

export const SecondaryAnswer = Template.bind({});
SecondaryAnswer.args = {
    primary: false,
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Long Answer',
}

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Ans',
}
