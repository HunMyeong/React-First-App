import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/routes/Login";
import { SignUp } from "./components/routes/SignUp";
import { RouterProtect } from "./RouterProtect";
import { Header } from "./components/Layout/Header";
import { Home } from "./components/routes/Home";

export const RouterPath = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouterProtect>
        <Header />
      </RouterProtect>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
