import FlexContainer from "./FlexContainer";
import Text from "./Text";

function Card({ p, src }) {
  return (
    <FlexContainer>
      <img src={src} alt="image" className=" h-[524px]   rounded-3xl " />
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
