import { Route, Routes } from "react-router-dom";
import { Page404 } from "../components/404/404.component";
import { LandingPage } from "../pages/landing/landing-page.component";
import { AuthenticationPage } from "../pages/authentication/authentication-page.component";
// import SignUpPage from "../pages/signUp.page";
// import LoginPage from "../pages/login.page";
// import LandingPage from "../pages/landing.page";

const UnauthorizedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/authenticate-user" element={<AuthenticationPage />}></Route>
        {/* <Route path="/sign-in" element={<LoginPage />}></Route> */}
        {/* <Route path="/" element={<LandingPage />}></Route> */}
        <Route path="*" element={<Page404 to="/404" />} />
      </Routes>
    </>
  );
};
export default UnauthorizedRoutes;
