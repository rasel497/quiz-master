import React from 'react';

const QuizBar = () => {
    return (
        <div>
            <h2>This is QuizBar</h2>
        </div>
    );
};

export default QuizBar;


// const [quizes, setQuizes] = useState([]);

    // useEffect(() => {
    //     axios.get('https://openapi.programming-hero.com/api/quiz/1')
    //         .then(data => {
    //             const quizes = data.data.data.questions;
    //             quizes.map(quiz => <Topics
    //                 key={quiz.id}
    //                 quiz={quiz}

    //             ></Topics>)
    //         });
    // }, [])
