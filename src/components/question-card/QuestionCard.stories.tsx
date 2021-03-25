//import React from 'react';
import { PrimaryQuestion } from '../question-tag/Question.stories';
import { Large, Small } from '../answer-tag/Answer.stories';
import { Secondary } from '../../stories/Button.stories';

export default {
    title: 'QuestionCard/Card'
}

export const Card = () => (
    <>
        <div>
            <Secondary label="Start quizz" backgroundColor="lightgreen"></Secondary>
        </div>
        <div>
            <PrimaryQuestion question="Question"/>
        </div>
        <div>
            <Large>Answer</Large>
        </div>
        <div>
            <Small>Next</Small>
        </div>
    </>
);