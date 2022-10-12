import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
    const { name, logo, id } = quiz;

    return (
        <div className='cardzz'>
            <h2>this is quiz card</h2>

            <Card className="card-group" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />

                <Card.Body>
                    <div className="card-title2">
                        <p>{name}</p>
                        <button className='btn-practice'><Link to={`/quiz/${id}`}>React Practice</Link></button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QuizCard;