import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Error</h2>
      <p>{error.statusText || "Page not found"}</p>
    </div>
  );
};

export default ErrorComponent;
