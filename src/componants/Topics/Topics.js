import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData()
    console.log(topics);
    return (
        <div className='under-const'>
            <img src="/undrconstruction.jpg" alt="" />
        </div>
    );
};

export default Topics;