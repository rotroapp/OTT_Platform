import './App.css';
import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/MainPage';
import Home from './components/Home';
import Detail from './components/Details';

const router = Router([

  {
    path : '/',
    element : <Main></Main>,
    children : [ 
        {
          path : '/',
          element : <Login></Login>
        },
        {
          path : '/home',
          element : <Home></Home>
        },
        {
          path : '/detail/:id',
          element : <Detail></Detail>
        }
    ]
  }
       ])
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
