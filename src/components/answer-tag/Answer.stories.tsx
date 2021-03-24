import { Story, Meta } from '@storybook/react/types-6-0';

import { Answer, AnswerProps } from './Answer';

export default {
    title: 'Answer',
    component: Answer,
} as Meta;

const Template: Story<AnswerProps> = (args) => <Answer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Answer',
}

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    label: 'Answer',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Answer',
}

export const Small = Template.bind({});
Large.args = {
    size: 'small',
    label: 'Answer',
}
