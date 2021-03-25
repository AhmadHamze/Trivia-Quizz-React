import React from 'react';
import './question.css';

export interface QuestionProps {
    primary?: boolean,
    question: string,
}

export const Question: React.FC<QuestionProps> = ({
    primary = true,
    question,
    ...props
}) => {
    const mode = primary? 'storybook-question--primary': 'storybook-question--secondary';
    return (
        <p
         className={['storybook-question', mode].join(' ')}
         dangerouslySetInnerHTML={{__html: question}}
         {...props}/>
    );
};