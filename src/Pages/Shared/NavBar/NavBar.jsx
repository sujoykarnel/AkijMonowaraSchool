import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navbarMenu = (
    <>
      <li>
        <NavLink className=" hover:bg-black" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/aboutUs"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/services"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/nurses"}>
          Nurses
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/contact"}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-green-600 text-neutral-content fixed max-w-screen-xl z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral text-neutral-content bg-opacity-70 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbarMenu}
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex text-center items-center">
            <img width={50} src="/src/assets/LOGO.png" alt="" />
            <h2 className="font-bold text-black">Akij-Monowara School</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarMenu}</ul>
      </div>
    </div>
  );
};

export default NavBar;
