import FlexContainer from "./FlexContainer";
import Header from "./Header";
import Text from "./Text";
import CountUp from "react-countup";
function NumbersCard({ text, header }) {
  return (
    <FlexContainer className={"py-4"}>
      <Header className={"font-extrabold text-stone-950 xl:text-7xl"}>
        <CountUp></CountUp>
        {header}
      </Header>
      <Text className={"mb-0 lg:text-xl"}>{text}</Text>
    </FlexContainer>
  );
}

export default NumbersCard;
