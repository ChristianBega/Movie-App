import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top.component";
import LoadingScreen from "../../pages/loading/loading-page.component";

const LandingPage = lazy(() => import("../../pages/landing/landing-page.component"));
const AuthenticationPage = lazy(() => import("../../pages/authentication/authentication-page.component"));
const Page404 = lazy(() => import("../../pages/404/404-page.component"));

const UnauthorizedRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Page404 to="/404" />} />
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/authenticate-user" element={<AuthenticationPage />}></Route>
      </Routes>
    </Suspense>
  );
};
export default UnauthorizedRoutes;
