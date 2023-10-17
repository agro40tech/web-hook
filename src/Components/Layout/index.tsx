import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";

// Сборщик страницы
export default function Layout() {
  return (
    <>
      <Header />
      {/* Компонент в который подгружается все что с роутинга */}
      <Outlet />
    </>
  );
}
