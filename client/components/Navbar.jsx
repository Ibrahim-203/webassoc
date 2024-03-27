import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navItems = [
    { id: 1, text: "Accueil" },
    { id: 2, text: "Activités" },
    { id: 3, text: "Evenement" },
    { id: 4, text: "A propos" },
    { id: 5, text: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-primary sticky top-0 z-[3000]">
        <nav className="flex justify-between items-center  w-[92%] mx-auto py-2 ">
          <div>
            <a href="./index.html">
              <p className="text-3xl text-white">AESA</p>
            </a>
          </div>
          <div
            className={`nav-links md:static absolute text-white md:min-h-fit md:w-auto  left-0 w-full flex items-center md:px-5 px-0 transition-all ease-in duration-500 top-14`}
            style={{ top: isOpen ? "50px" : "-400px" }}
          >
            <ul className="flex md:flex-row px-3 py-4 w-full flex-col md:bg-primary bg-primary/95 backdrop-blur-sm md:items-center md:gap-[4vw] gap-8">
              {navItems.map((navItem) => (
                <li>
                  <a
                    className="hover:text-secondary hover:border-b-2 hover:border-white hover:pb-2"
                    href="/"
                  >
                    {navItem.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="./login.html"
              className="bg-white text-primary px-5 py-1 rounded-lg border-2 border-white hover:bg-primary hover:text-white transition duration-700 ease-in-out"
            >
              Se connecter
            </a>
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
