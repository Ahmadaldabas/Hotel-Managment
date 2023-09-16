import { Outlet, useRouteError } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Container from "../ui/Container";
import Header from "../ui/Header";
import Home from "../pages/Home";
function AppLayout() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Home />
      {<Outlet />}
    </>
  );
}

export default AppLayout;
