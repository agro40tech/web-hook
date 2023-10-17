import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import "./index-style.css";

// Сборщик страницы
export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        {/* Компонент в который подгружается все что с роутинга */}
        <Outlet />
      </main>
    </>
  );
}
