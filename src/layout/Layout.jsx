import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Desde Layaout.jsx</h1>
      <Outlet />
    </div>
  );
};

export default Layout;