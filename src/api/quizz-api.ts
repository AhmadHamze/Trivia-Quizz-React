import { shuffleArray } from '../utilities/shuffle-array';

// Create a type to handle the response returned by the API.
export type Question = {
    category: string;
    correct_answer: string;
    difficult: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// The data returned by the API seperates the correct answer from the incorrect ones,
// we want a type where all answers exist in the same array, so we can shuffle it and return it to the user.
// To do so we can use "Intersection types" to create a new type containing a new array of strings.
export type QuestionExtended = Question & {answers: string[]};

// This function maps each object in the results array returning a new object
// having the exact same properties as the original but with a new 'answers' array
// where we can find all answers in the same array.
// This new array is also shuffled.
export async function getQuizzData(): Promise<QuestionExtended[]> {
    const url = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));
};
