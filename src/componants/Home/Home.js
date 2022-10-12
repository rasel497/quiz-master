import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css'

const Home = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);

    return (
        <div>
            <Header></Header>
            <div className="card-container">
                <div className="card-group">
                    {
                        quizes.map(quiz => <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                        ></QuizCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;