import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componants/Home/Home';
import Statics from './componants/Statics/Statics';
import About from './componants/About/About';
import Root from './Root/Root';
import Blog from './componants/Blog/Blog';
import Topics from './componants/Topics/Topics';
import ErrorPage from './componants/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,

      children: [

        {
          path: '/home',
          element: <Home></Home>
        },

        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statics',
          element: <Statics></Statics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/about',
          element: <About></About>
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
