import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Questions.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ quiz, idx }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(quiz);

    const cheackAnswer = (e) => {
        const value = e.target.value;
        if (value === correctAnswer) {
            toast.success("Correct", { autoClose: 500 });
        }
        else {
            toast.error('Wrong', { autoClose: 500 })
        }
        // quizCalculatin(e.target)
    }




    return (
        <div className="quiz-box">
            <p className='question'>Quiz {idx + 1}:{question}

                <EyeIcon className="icon-eye h-5 w-6 text-blue-500" />
            </p>

            <div className="quiz-temp">
                {
                    options.map(option =>
                        <div className='option-items'>
                            <input onClick={(e) => cheackAnswer(e)} type="radio" id={option} name={question} value={option} />
                            {/* <input id={`option`} type="radio" name={`question`} value={`option`} /> */}
                            <label className='input-left' htmlFor={option}>{option}</label>

                            <Toaster></Toaster>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Questions;