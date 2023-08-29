import { useContext } from "react";
import { SignUpForm } from "./components/sign-up-form/sign-up-form.component";
import { UserContext } from "./contexts/user.context";
import { AuthContext } from "./contexts/authentication.context";
import { Navigation } from "./components/navigation/navigation.component";
import UnauthorizedRoutes from "./routes/unauthorized.routes";
import AuthorizedRoutes from "./routes/authorized.routes";

function App() {
  const { currentUser } = useContext(UserContext);
  const { isAuthorized } = useContext(AuthContext);
  console.log(isAuthorized);

  return (
    <>
      <Navigation />
      {/* <SignUpForm /> */}
      {/* <h1>Current user logged in :{currentUser?.uid}</h1> */}
      {isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
    </>
  );
}

export default App;
