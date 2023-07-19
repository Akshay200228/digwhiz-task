import { useState } from "react";
import { FiSearch, FiX, FiMenu } from "react-icons/fi";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar fixed top-0 left-0 z-50 bg-white">
      <img src={logo} alt="digwhiz" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-primary" : "text-gray-700"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 z-50 justify-end items-center">
        <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FiX className="w-[28px] h-[28px] object-contain" />
          ) : (
            <FiMenu className="w-[28px] h-[28px] object-contain" />
          )}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primary" : "text-gray-700"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FiSearch className="w-6 h-6 ml-4 cursor-pointer" />
    </nav>
  );
};

export default Navbar;
