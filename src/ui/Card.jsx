import FlexContainer from "./FlexContainer";
import Text from "./Text";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";

function Card({ p, src, direction = "left" }) {
  const isSmallScreen = useMediaQuery("(max-width : 768px)");
  const animation = {
    hidden: {
      opacity: 0,
      x: `${direction === "left" ? "-95%" : "95%"}`,
    },
    active: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };
  return (
    <FlexContainer>
      {isSmallScreen ? (
        <motion.img
          variants={animation}
          whileInView="active"
          initial="hidden"
          viewport={{ once: true }}
          src={src}
          alt="image"
          className=" h-[524px]   rounded-3xl "
        />
      ) : (
        <img
          src={src}
          alt="image"
          className=" h-[524px]   rounded-3xl "
        />
      )}

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
