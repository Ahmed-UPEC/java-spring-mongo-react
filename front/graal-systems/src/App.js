import "./App.css";
import Hero from "./components/Hero";
import UserInfo from "./components/UserInfo";

// import router components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/user-info/:id",
    element: <UserInfo />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
