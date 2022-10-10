import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './componants/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>
    }
  ])
  return (
    <div className="App">
      <h2>Hello React</h2>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
