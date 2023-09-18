import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Header from "../ui/Header";
import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

const header = {
  start: {
    opacity: 0,
    y: 16,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delayChildren: 4 },
  },
};

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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
  }, []);
  return (
    <Container className={"font-primaryFont mt-8 px-6 lg:mt-16"}>
      <div className="grid grid-cols-1 grid-rows-2 justify-center gap-4 md:px-10 lg:grid lg:grid-cols-[1fr_1.75fr] lg:p-0 ">
        <motion.div
          className=" order-2  flex  translate-y-[16px] transform flex-col items-center gap-4  self-center text-center text-stone-700 opacity-0 lg:order-none lg:items-start  lg:text-left "
          variants={header}
          initial="start"
          animate="active"
        >
          <Header className=" font-bold leading-relaxed text-stone-800">
            Our hotel management {!isSmallScreen && <br />}
            is the perfect solution {!isSmallScreen && <br />}
            for hotels of all sizes.
          </Header>
          <p className=" mb-8 text-lg text-stone-600 lg:w-80 lg:text-[1.2rem]">
            Our app is easy to use and provides a variety of features to help
            you manage your hotel more efficiently
          </p>
          <div className="flex items-center gap-2 ">
            <motion.span
              initial={{ x: -16 }}
              transition={{ type: "spring", stiffness: 200 }}
              animate={{ x: 0 }}
            >
              <NavLink
                to={"Log-in"}
                className="rounded-md border border-blue-500 px-8   py-4 font-bold  text-blue-600 transition-all  hover:bg-slate-200/30 active:bg-slate-200/30 "
              >
                Log in
              </NavLink>
            </motion.span>
            <motion.span
              initial={{ x: 16 }}
              transition={{ type: "spring", stiffness: 200 }}
              animate={{ x: 0 }}
            >
              <NavLink
                to={"Sign-up"}
                className="rounded-md border bg-blue-600  px-8 py-4 font-bold text-slate-100  transition-all  hover:bg-blue-800  active:bg-blue-800 "
              >
                Sign up
              </NavLink>
            </motion.span>
          </div>
        </motion.div>
        <div className=" order-1 flex max-w-screen-sm self-start   justify-self-center lg:order-none">
          <motion.div
            layout
            className="mr-8 lg:mx-8"
            transition={{ ease: "easeOut", duration: 1.2 }}
            animate={{
              y: "25%",
            }}
          >
            <img
              src="/hero/first.jpg"
              alt="Person sitting infront of a pc screen"
              className="max-w-full"
              width="720"
              height="1092px"
            />
          </motion.div>
          <motion.div
            initial={{ y: "50%" }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
          >
            <img
              src="/hero/second.jpg"
              alt="Person sitting infront of a pc screen"
              className="max-w-full"
              height="2000"
              width="1333"
            />
          </motion.div>
          <motion.div
            initial={{ x: "75%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
          >
            <img
              src="/hero/third.jpg"
              alt="Person sitting infront of a pc screen"
              className="mt-60 max-w-full"
              height="728"
              width="728"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
