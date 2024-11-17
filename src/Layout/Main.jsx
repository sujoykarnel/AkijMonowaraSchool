import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16 pb-4 px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
