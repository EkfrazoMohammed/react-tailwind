import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/ErrorComponent";
import HomePage from "../pages/Homepage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <Error />,
  },
]);

export default router;
