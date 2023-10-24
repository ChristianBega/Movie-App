import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../components/scroll-to-top/scroll-to-top.component";
import LoadingScreen from "../pages/loading/loading-page.component";

const Page404 = lazy(() => import("../pages/404/404-page.component"));
const HomePage = lazy(() => import("../pages/home/home-page.component"));
const MoviesPage = lazy(() => import("../pages/movies/movies-page.component"));
const TvShowsPage = lazy(() => import("../pages/tv-shows/tv-shows-page.component"));
const MyStuffPage = lazy(() => import("../pages/my-stuff/my-stuff-page.component"));
const ProfilePage = lazy(() => import("../pages/profile/profile-page.component"));
const PreviewPage = lazy(() => import("../pages/preview/preview-page.component"));

const AuthorizedRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/tv-shows" element={<TvShowsPage />}></Route>
        <Route path="/my-stuff" element={<MyStuffPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/preview" element={<PreviewPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AuthorizedRoutes;
