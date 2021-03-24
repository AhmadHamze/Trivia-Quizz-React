import React from 'react';
import './answer.css';

export interface AnswerProps {
    disabled?: boolean;
    label: any;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    value?: string;
}

export const Answer: React.FC<AnswerProps> = ({
    primary = true,
    size = 'medium',
    label,
    ...props
}) => {
    const mode = primary? 'storybook-answer--primary': 'storybook-answer--secondary';
    return (
        <button
        className={['storybook-answer', `storybook-answer--${size}`, mode].join(' ')}
        {...props}>
            {label}
        </button>
    )
};