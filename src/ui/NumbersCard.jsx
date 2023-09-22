import { useInView } from "framer-motion";
import FlexContainer from "./FlexContainer";
import Header from "./Header";
import Text from "./Text";
import CountUp from "react-countup";
import { useRef } from "react";
function NumbersCard({ text, header, start, end }) {
  const counter = useRef(null);

  const isInView = useInView(counter, {
    once: true,
    amount: 0.2,
  });
  return (
    <FlexContainer innerRef={counter} className={"py-4 w-full "}>
      <Header
        className={
          "font-extrabold text-stone-950 text-5xl sm:text-6xl  md:text-6xl xl:text-7xl"
        }
      >
        {isInView && (
          <CountUp start={start} end={end}>
            {header}
          </CountUp>
        )}
        {header}
      </Header>
      <Text className={"mb-0 lg:text-xl"}>{text}</Text>
    </FlexContainer>
  );
}

export default NumbersCard;
