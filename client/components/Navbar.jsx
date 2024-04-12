import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { id: 1, text: "Accueil",link:"/" },
    { id: 2, text: "Activités",link:"/activity" },
    { id: 3, text: "Evenement",link:"/event" },
    { id: 4, text: "A propos",link:"/about" },
    { id: 5, text: "Contact",link:"/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-primary sticky top-0 z-[3000]">
        <nav className="flex justify-between items-center  w-[95%] mx-auto py-2 ">
          <div>
            <NavLink to="/">
              <p className="text-3xl text-white font-secondaryFont">AESA</p>
            </NavLink>
          </div>
          <div
            className={`nav-links md:static absolute text-white md:min-h-fit md:w-auto  left-0 w-full flex items-center md:px-5 px-0 transition-all ease-in duration-500 top-14`}
            style={{ top: isOpen ? "50px" : "-400px" }}
          >
            <ul className="flex md:flex-row px-3 py-4 w-full flex-col md:bg-primary bg-primary/95 backdrop-blur-sm md:items-center md:gap-[4vw] gap-8 font-mainFont text-sm">
              {navItems.map((navItem,index) => (
                <NavLink to={navItem.link} className = {(nav)=>(nav.isActive?"active":"")}>
                <li key={index}>
                  <span
                    className="hover:text-secondary  cursor-pointer"
                    href="/"
                  >
                    {navItem.text}
                  </span>
                </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/login">
            <span
              className="bg-white text-primary px-5 py-1 rounded-lg border-2 border-white hover:bg-primary hover:text-white transition duration-700 ease-in-out"
            >
              Se connecter
            </span>
            </NavLink>
            <span className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2xl"
                  className="text-white"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size="2xl"
                  className="text-white"
                />
              )}
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
