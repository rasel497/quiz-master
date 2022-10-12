import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css'

const Home = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);

    return (
        <div>

            <Header></Header>
            <div className="card-father">


                {
                    quizes.map(quiz => <QuizCard
                        key={quiz.id}
                        quiz={quiz}

                    ></QuizCard>)
                }
                {/* <Card className="card-group" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/logo512.png" />

                    <Card.Body>
                        <div className="card-title2">
                            <p>React</p>
                            <button className='btn-practice'><Link>React Practice</Link></button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="card-group" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/JavaScript_logo_2.svg.png" />

                    <Card.Body>
                        <div className="card-title2">
                            <p>JavaScript</p>
                            <button className='btn-practice'>React Practice</button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="card-group" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/css-icon.png" />
                    <Card.Body>
                        <div className="card-title2">
                            <p>CSS</p>
                            <button className='btn-practice'>React Practice</button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="card-group" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/icone-github-grise.png" />
                    <Card.Body>
                        <div className="card-title2">
                            <p>GitHub</p>
                            <button className='btn-practice'>React Practice</button>
                        </div>
                    </Card.Body>
                </Card> */}


            </div>
        </div>
    );
};

export default Home;


