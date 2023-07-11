import logo from './logo.svg';
import './App.css';
import RecProfile from './ReceiverProfile';
import Receiver from './Receiver';
import List from './List'
import ReactDOM from "react-dom/client";
import Login from './Login'
import Giver from "./Giver"
import RecMain from "./ReceiverMain"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Start from './Start';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start/>,
  },
  {
    path: "/profile", 
    element: <RecProfile/>
  },
  {
    path: "/receiver",
    element: <Receiver/>
  },
  {
    path: "/list",
    element: <List/>
  },
  {
    path: "/giver",
    element: <Giver/>
  },
  {
    path: "/recmain",
    element: <RecMain/>
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
