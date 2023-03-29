import { Block } from "./heading.styled";

interface HeadingProps {
  children?: React.ReactNode;
}

function Heading({children}: HeadingProps) {
  return(
    <Block>
      {children}
    </Block>
  );
}

export default Heading;