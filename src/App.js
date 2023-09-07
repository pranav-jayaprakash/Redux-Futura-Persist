import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rtwo from './Components/Rtwo';
import Rone from './Components/Rone';

function App() {

  const router = createBrowserRouter([
    {path:'/',
  element:<Rtwo/>},
  {path:'about',element:<Rone/>}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
