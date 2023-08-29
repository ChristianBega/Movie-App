import { useContext } from "react";
import { SignUpForm } from "./components/sign-up-form/sign-up-form.component";
import { UserContext } from "./contexts/user.context";
import { AuthContext } from "./contexts/authentication.context";

function App() {
  const { currentUser } = useContext(UserContext);
  const { isAuthorized } = useContext(AuthContext);
  console.log(isAuthorized);

  return (
    <>
      <SignUpForm />
      <h1>{currentUser?.uid}</h1>
    </>
  );
}

export default App;
