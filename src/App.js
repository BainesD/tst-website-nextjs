import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navigation/Navbar";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
