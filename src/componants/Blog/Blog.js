import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className='boos'>
            <h2>This is Questions Blog of summary!</h2>
            <div className="card-blog">
                <div className="card">
                    <p><strong>01. What is the puspose of React Router?</strong>
                        <br />
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                    </p>
                </div>

                <div className="card">
                    <p>
                        <strong>02. How does Context API works?</strong>
                        <br />
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </p>
                </div>

                <div className="card">
                    <p>
                        <strong>03. How does useRef hook in react in your opinion?</strong>
                        <br />
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.
                        The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.
                        Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component.
                        For example, it’s often quite handy when using external libraries that weren’t made with React in mind.
                    </p>
                </div>

                <div className="card">
                    <p>
                        <strong>04. Project Descript or features?</strong>
                        <br />
                        In this projet using ReactJs, vanila CSS and bootstrap frame work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;