import { createBrowserRouter } from "react-router-dom";
import WellcomPage from "../Pages/WellcomPage/WellcomPage";
import ErrorComponent from "./ErrorComponent";
import RegistrPage from "../Pages/RegisterPage/RegisterPage";
import SigninPage from "../Pages/SigninPage/SigninPage";
import MainPage from "../Pages/MainPage/MainPage";

const wellcomLoader = () => ({
  title: "Welcome to the app!",
  mainText:
    "This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook.",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <WellcomPage />,
    loader: wellcomLoader,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/register",
    element: <RegistrPage />
  },
  {
    path: "/signin",
    element: <SigninPage />
  },
  {
    path: "/mainpage",
    element: <MainPage />
  }
]);

export default router;
