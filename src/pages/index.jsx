import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import RecsPage from "./RecsPage"
import FavouritePage from "./FavouritePage";
import AuthPage from "./AuthPage";
import LogoutPage from "./Logout";
import RegistrationPage from "./RegistrationPage";


const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/recommended" element={<RecsPage />} />
      <Route path="/favourite" element={<FavouritePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default RouteComponent;
