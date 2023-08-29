import { Route, Routes } from "react-router-dom";
import { Page404 } from "../components/404/404.component";

import { HomePage } from "../pages/home/home-page.component";

const AuthorizedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<Page404 to="/404" />} />
      </Routes>
    </>
  );
};

export default AuthorizedRoutes;
