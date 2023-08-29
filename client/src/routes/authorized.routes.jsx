import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page404 } from "../components/404/404.component";
// import HomePage from "../pages/home.page";
// import BlogPage from "../pages/blog.page";
// import SettingsPage from "../pages/settings.page";
// import LandingPage from "../pages/landing.page";

const AuthorizedRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/blogPage/:id" element={<BlogPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route> */}
        <Route path="*" element={<Page404 to="/404" />} />
      </Routes>
    </>
  );
};

export default AuthorizedRoutes;
