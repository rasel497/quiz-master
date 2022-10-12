import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuizCard.css'
import { BookOpenIcon } from '@heroicons/react/24/solid'

const QuizCard = ({ quiz }) => {
    const { name, logo, id, total } = quiz;
    console.log(total);
    return (
        <div className='cardzz'>
            <Card className="card-group2" style={{ width: '18rem' }}>
                <Card.Img className="card-img" variant="top" src={logo} />
                <Card.Body>
                    <div className="card-title2">
                        <p>{name}</p>
                        <p><BookOpenIcon className="h-5 w-6 text-blue-500 inline" /> {total}</p>
                    </div>
                    <div className="btnns">
                        <button className='btn-practice'><Link className='btn-practice' to={`/quiz/${id}`}>START PRACTICE</Link></button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QuizCard;