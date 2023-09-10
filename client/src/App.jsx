import { useContext } from "react";
import { AuthContext } from "./contexts/authentication.context";
import { Navigation } from "./components/navigation/navigation.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import UnauthorizedRoutes from "./routes/unauthorized.routes";
import AuthorizedRoutes from "./routes/authorized.routes";
import "./app.scss";
function App() {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <>
      <ErrorBoundary>
        {isAuthorized}
        <Navigation />
        {isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </ErrorBoundary>
    </>
  );
}

export default App;
