import { Header } from "./Header.jsx";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <div className="outer-div">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
