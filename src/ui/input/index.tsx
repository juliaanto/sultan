import { StyledInput, Wrapper } from "./input.styled";

import Button from "../button";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

export interface InputProps {
  type?: string;
  placeholder?: string;
  $view?: "headerSearch";
}

function Input({
  type="text",
  placeholder,
  $view,
}: InputProps): JSX.Element {
  return (
    <Wrapper 
      $view={$view}
    >
      <StyledInput
        type={type}
        placeholder={placeholder}
        $view={$view}
      ></StyledInput>
      <Button $view="headerSearch">
        <IconSearch />
      </Button>
    </Wrapper>
  );
}

export default Input;