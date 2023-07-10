import { Route, Routes } from "react-router-dom";
import CatalogPage from "./CatalogPage";
import ProfilePage from "./ProfilePage";
import RecsSeparatePage from "./RecsSeparatePage"
import FavouriteSeparatePage from "./FavouriteSeparatePage";
import AuthPage from "./AuthPage";
import LogoutPage from "./Logout";
import RegistrationPage from "./RegistrationPage";
import BookPage from "./BookPage";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ProtectedRoute from "../components/ProtectedRoute";
import SearchPage from "./SearchPage";


const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/:id" element={<BookPage />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>} />
      <Route path="/recommended" element={
        <ProtectedRoute>
          <RecsSeparatePage />
        </ProtectedRoute>} />
      <Route path="/favourite" element={
        <ProtectedRoute>
          <FavouriteSeparatePage />
        </ProtectedRoute>} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/search/:text" element={<SearchPage />} />
    </Routes>
  );
};

export default RouteComponent;
