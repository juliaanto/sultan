import { StyledInput, Wrapper } from "./input.styled";

import Button from "../button";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

interface SearchInputProps {
  type?: string;
  placeholder?: string;
}

function Input({
  type="text",
  placeholder,
}: SearchInputProps): JSX.Element {
  return (
    <Wrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
      ></StyledInput>
      <Button type="button">
        <IconSearch />
      </Button>
    </Wrapper>
  );
}

export default Input;