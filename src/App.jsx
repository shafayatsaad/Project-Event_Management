import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EventDetails from "./pages/EventDetails/EventDetails";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import EventList from "./pages/EventList/EventList";


import "./App.css";

constant router = createBrowserRouter([
  {path:"/",element:<EventList/>},
  {path:"/find-events",element:<FilterEvents/>},
  {path:"/events/:id",element}
])

function App() {
  return <></>;
}

export default App;
