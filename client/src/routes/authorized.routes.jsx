import { Route, Routes } from "react-router-dom";
import { Page404 } from "../components/404/404.component";

import { HomePage } from "../pages/home/home-page.component";
import { MoviesPage } from "../pages/movies/movies-page.component";
import { TvShowsPage } from "../pages/tv-shows/tv-shows-page.component";
import { MyStuffPage } from "../pages/my-stuff/my-stuff-page.component";
import { AccountPage } from "../pages/account/account-page.component";

const AuthorizedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/tv-shows" element={<TvShowsPage />}></Route>
        <Route path="/my-stuff" element={<MyStuffPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>

        <Route path="*" element={<Page404 to="/404" />} />
      </Routes>
    </>
  );
};

export default AuthorizedRoutes;
