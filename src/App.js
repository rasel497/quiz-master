import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componants/Home/Home';
import Statics from './componants/Statics/Statics';
import Root from './Root/Root';
import Blog from './componants/Blog/Blog';
import Topics from './componants/Topics/Topics';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import Quiz from './componants/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch(' https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },

        {
          path: 'about',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`);
          },
          element: <Topics></Topics>
        },

        {
          path: 'statics',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Statics></Statics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },

        {
          path: 'quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quiz></Quiz>
        },
      ]

    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
