import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import FeedPosts from "./Pages/feed__posts";
import SingIn from "./Pages/sing-in";
import SingUp from "./Pages/sing-up";

import "./Accets/styles/fonts.css";
import "./Accets/styles/global-styles.css";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/edit__profile";
import { useTypeSelector } from "./hooks/useTypeSelector";
import NotFoundPage from "./Pages/not__found";

// Роутер по странице
export default function App() {
  const Data = useTypeSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* общий роутер */}
        <Route path="/" element={<Layout />}>
          <Route index element={<FeedPosts />} />
          <Route path="singin" element={<SingIn />} />
          <Route path="singup" element={<SingUp />} />
          <Route path={`${Data.profileUrl}`} element={<Profile />} />
          <Route path={`${Data.profileUrl}/edit`} element={<EditProfile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
