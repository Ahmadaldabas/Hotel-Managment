import { useEffect, useState } from "react";
import FlexContainer from "./FlexContainer";
import Text from "./Text";
import { motion } from "framer-motion";
const animation = {
  active: {
    opacity: 1,
    x: "0",
    transition: { duration: 4 },
  },
};
function Card({ p, src, direction = "left" }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  console.log(isSmallScreen);
  useEffect(() => {
    if (window.innerWidth < 640) setIsSmallScreen(true);
    const handleResize = function () {
      if (window.innerWidth < 640) setIsSmallScreen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSmallScreen]);
  return (
    <FlexContainer>
      <motion.img
        whileInView={{
          x: "var(--whileInView)",
          opacity: "var(--opacityWhileInView)",
          transition: { duration: 0.7 },
        }}
        src={src}
        initial={{ x: "var(--initial)", opacity: "var(--opacity)" }}
        viewport={{ once: true, amount: 0.7 }}
        alt="image"
        className={` h-[524px] rounded-3xl [--initial:${
          direction === "left" ? "-35%" : "35%"
        }] [--opacity:0%]  [--opacityWhileInView:100%] [--whileInView:0%] md:[--initial:0] md:[--opacity:1] md:[--opacityWhileInView:1] md:[--whileInView:0]  `}
      />
      <Text
        className={"font-medium text-stone-900 lg:w-[75%] lg:text-xl"}
        animation={true}
      >
        {p}
      </Text>
    </FlexContainer>
  );
}

export default Card;
