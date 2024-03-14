import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Cuisines from './Pages/Main_Pages/Cuisines';
import Home from './Pages/Main_Pages/Home';
import Quiz from './Pages/Main_Pages/Quiz';
import SouthIndian from './Pages/Inner_Pages/SouthIndian';
import NorthIndian from './Pages/Inner_Pages/NorthIndian';
import Italian from './Pages/Inner_Pages/Italian';
import Mediterranean from './Pages/Inner_Pages/Mediterranean';
import Chinese from './Pages/Inner_Pages/Chinese';
import Japanese from './Pages/Inner_Pages/Japanese';


function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'menu',element:<Cuisines/>},
    {path:'/quizmenu',element:<Quiz/>},
    {path:'/southindian',element:<SouthIndian/>},
    {path:'/northindian',element:<NorthIndian/>},
    {path:'/italian',element:<Italian/>},
    {path:'/mediterranean',element:<Mediterranean/>},
    {path:'/chinese',element:<Chinese/>},
    {path:'/japanese',element:<Japanese/>},
    
    

  ])
  return (
    <>
    <RouterProvider router={router} />

    </>
    
  );
}


export default App;
