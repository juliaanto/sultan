import { StyledInput, Wrapper } from "./input.styled";

import Button from "../button";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

export interface InputProps {
  type?: string;
  placeholder?: string;
  $style?: "headerSearch";
}

function Input({
  type="text",
  placeholder,
  $style,
}: InputProps): JSX.Element {
  return (
    <Wrapper 
      $style={$style}
    >
      <StyledInput
        type={type}
        placeholder={placeholder}
        $style={$style}
      ></StyledInput>
      <Button type="button" $style="headerSearch">
        <IconSearch />
      </Button>
    </Wrapper>
  );
}

export default Input;