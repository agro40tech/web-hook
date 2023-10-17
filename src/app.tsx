import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Layout from "./Components/Layout";
import FeedPosts from "./Pages/feed__posts";
import SingIn from "./Pages/sing-in";
import SingUp from "./Pages/sing-up";

import "./Accets/styles/fonts.css";
import "./Accets/styles/global-styles.css";

// Роутер по странице
export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {/* общий роутер */}
          <Route path="/" element={<Layout />}>
            <Route index element={<FeedPosts />} />
            <Route path="singin" element={<SingIn />} />
            <Route path="singup" element={<SingUp />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
