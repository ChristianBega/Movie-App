import { useContext } from "react";
import { AuthContext } from "./contexts/authentication.context";
import { Navigation } from "./components/navigation/navigation.component";
import UnauthorizedRoutes from "./routes/unauthorized.routes";
import AuthorizedRoutes from "./routes/authorized.routes";
import "./app.scss";
function App() {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <>
      {isAuthorized}
      <Navigation />
      {isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
    </>
  );
}

export default App;
