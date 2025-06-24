import { useState, useEffect } from "react";
import close from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);

  // Update active link based on which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust sensitivity
    );

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-black flex py-6 justify-between items-center px-6 sticky top-0 z-50">
      {/* Logo or Brand Name */}
      <a href="#hero" className="text-white font-semibold font-poppins pl-4 cursor-pointer">
        DevInDays
      </a>

      {/* Desktop Nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.id ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`} onClick={() => setActive(nav.id)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[18px] h-[24px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-slate-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <a href={`#${nav.id}`} onClick={() => setActive(nav.id)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
