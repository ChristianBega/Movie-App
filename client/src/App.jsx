import { useContext } from "react";
import { AuthContext } from "./setup/contexts/authentication.context";
import { Navigation } from "./components/navigation/index";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import UnauthorizedRoutes from "./setup/routes/unauthorized.routes";
import AuthorizedRoutes from "./setup/routes/authorized.routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./app.scss";
function App() {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <>
      <ErrorBoundary>
        <Navigation />
        {isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </ErrorBoundary>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
