import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetail from "./pages/EventDetails/EventDetails";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import EventList from "./pages/EventList/EventList";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
