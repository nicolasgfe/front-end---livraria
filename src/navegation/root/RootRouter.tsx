import { createBrowserRouter } from "react-router-dom";
import { Home, ListBook, RegisterBook } from "../../screens";

const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children:[
      {
        index: true,
        element: <ListBook/>,
      },
      {
        path: '/list',
        element: <ListBook/>,
      },
      {
        path: 'register', 
        element: <RegisterBook/>
      }
    ]

  }
])

export default RootRouter