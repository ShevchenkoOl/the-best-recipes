import { createBrowserRouter } from "react-router-dom";
import WellcomPage from "../Pages/WellcomPage/WellcomPage";
import ErrorComponent from "./ErrorComponent";

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
]);

export default router;
