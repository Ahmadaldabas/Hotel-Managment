import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const transition = { type: "spring", stiffness: 100 };
  const animate = menuIsOpen && { x: "0" };
  const exit = { x: "100%" };

  useEffect(() => {
    // Update the screen size state based on window width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsSmallScreen]);

  return (
    <nav className="font-primaryFont flex h-20 w-full justify-between p-4 text-stone-900  ">
      <div className="mr-48 flex items-center justify-between gap-52">
        <NavLink className={({ isActive }) => (isActive ? "" : "")}>
          <Logo />
        </NavLink>
      </div>
      <div className="z-20 block lg:hidden">
        <Hamburger toggled={menuIsOpen} toggle={setMenuIsOpen} />
      </div>
      <AnimatePresence>
        {isSmallScreen && menuIsOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={animate}
            transition={transition}
            exit={exit}
            key={"modal"}
            className="absolute inset-0  z-10 h-screen w-full bg-slate-300/60 "
          >
            <ul className="lg:flex lg:items-center lg:justify-center lg:gap-4  lg:text-lg">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <ul className="lg:flex lg:items-center lg:justify-center lg:gap-4  lg:text-lg">
              <li>
                <NavLink
                  to={"Sign-up"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"Log-in"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Log in
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}{" "}
        {!isSmallScreen && (
          <motion.div className="  w-full lg:static lg:flex lg:h-auto lg:w-full lg:items-center lg:justify-between lg:bg-white">
            <ul className="lg:flex lg:items-center lg:justify-center lg:gap-4  lg:text-lg">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <ul className="lg:flex lg:items-center lg:justify-center lg:gap-4  lg:text-lg">
              <li>
                <NavLink
                  to={"Sign-up"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"Log-in"}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-slate-500/20 px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20 "
                      : `rounded-md px-4 py-2  transition-colors visited:bg-slate-500/20 hover:bg-slate-500/20 focus:ring focus:ring-blue-600 active:bg-slate-500/20`
                  }
                >
                  Log in
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
