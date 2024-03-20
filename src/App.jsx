import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventList from "./pages/EventList/EventList";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import EventDetail from "./pages/EventDetails/EventDetails";

import "./App.css";

const routes = createBrowserRouter([
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> },
]);

function App() {
  return <></>;
}

export default App;
