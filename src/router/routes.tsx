import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Project from '../pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/sobre',
    element: <Sobre/>
  },
  {
    path: '*',
    element: <Sobre/>
  },
  {
    path:'/project/:id',
    element: <Project/>
  }
]);

export default router;