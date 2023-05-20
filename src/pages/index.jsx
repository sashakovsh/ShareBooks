import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import RecsPage from "./RecsPage"

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/recommended" element={<RecsPage />} />
      {/* <Route path="/recommended" element={<RecsPage />} />
      <Route path="/favourite" element={<FavouritePage />} /> */}
    </Routes>
  );
};

export default RouteComponent;
