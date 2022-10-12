import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizes = useLoaderData().data.questions;
    console.log(quizes);
    return (
        <div>
            {
                quizes.map((quiz, idx) => <Questions
                    key={quiz.id}
                    quiz={quiz}
                    idx={idx}
                ></Questions>)
            }

        </div>
    );
};

export default Quiz;