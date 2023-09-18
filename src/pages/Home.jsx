import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Header from "../ui/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FlexContainer from "../ui/FlexContainer";
import GridContainer from "../ui/GridContainer";
import Card from "../ui/Card";
import HighLight from "../ui/HighLight";

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
    <>
      <Container className={"overflow-hidden"}>
        <div className="grid grid-cols-1 justify-center gap-4 md:px-10 lg:grid lg:grid-cols-[1fr_1.75fr] lg:p-0 ">
          <motion.div
            className=" order-2 flex translate-y-[16px]  transform flex-col flex-wrap items-center gap-4  self-center text-center text-stone-700 opacity-0 lg:order-none lg:items-stretch  lg:text-left "
            variants={header}
            initial="start"
            animate="active"
          >
            <Header className=" font-bold leading-relaxed ">
              Our hotel management {!isSmallScreen && <br />}
              is the perfect solution {!isSmallScreen && <br />}
              for hotels of all sizes.
            </Header>
            <div>
              <p className=" mb-8  w-full text-lg text-stone-600  lg:text-[1.0rem]">
                Our app is easy to use and provides a variety of
                features to help you manage your hotel more
                efficiently
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:block  sm:flex-row  lg:flex lg:items-center">
              <motion.span
                initial={{ x: -16 }}
                transition={{ type: "spring", stiffness: 200 }}
                animate={{ x: 0 }}
              >
                <NavLink
                  to={"Log-in"}
                  className="inline-block w-full rounded-md border border-blue-500  px-8 py-3 font-bold text-blue-600   transition-all hover:bg-slate-200/30  active:bg-slate-200/30 md:w-1/2 lg:w-auto "
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
                  className="inline-block  w-full rounded-md border bg-blue-600 px-8 py-3 font-bold text-slate-100  transition-all hover:bg-blue-800 active:bg-blue-800  md:w-1/2   lg:w-auto "
                >
                  Sign up
                </NavLink>
              </motion.span>
            </div>
          </motion.div>
          <div className=" lg:max-w order-1 flex max-w-screen-sm self-start justify-self-center   lg:order-none lg:max-w-none">
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
      <Container>
        <FlexContainer>
          <Header className={"mb-16 lg:w-5/12"} animation={true}>
            Save time and money,
            {""} provide your guests with a better{" "}
            <span className="text-blue-600">experience.</span>
          </Header>
        </FlexContainer>
        <GridContainer className={"lg:grid-cols-3 lg:gap-8 "}>
          <Card
            p={
              <>
                This page would list all of the different
                <HighLight>room</HighLight>
                types that your hotel offers.
              </>
            }
            src={"fetures/first.jpg"}
          ></Card>
          <Card
            p={
              <>
                This page would allow guests to make
                <HighLight>online reservations</HighLight>
                for rooms at your hotel.
              </>
            }
            direction="right"
            src={"fetures/second.jpg"}
            direction="right"
          ></Card>
          <Card
            p={
              <>
                This page would list all of the{" "}
                <HighLight>amenities</HighLight>
                that your hotel offers
              </>
            }
            src={"fetures/third.jpg"}
          ></Card>
        </GridContainer>
      </Container>
    </>
  );
}

export default Home;
