import { createBrowserRouter, RouterProvider }
import EventDetails from "./pages/EventDetails/EventDetails";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import EventList from "./pages/EventList/EventList";


import "./App.css";

constant router = createBrowserRouter([
  {path:"/",element:<EventList/>},
])

function App() {
  return <></>;
}

export default App;
