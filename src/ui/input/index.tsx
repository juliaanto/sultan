import { Label, StyledInput, Wrapper } from "./input.styled";

import Button from "../button";
import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

export interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  $view?: "headerSearch" | "footerEmail";
}

function Input({
  type="text",
  placeholder,
  name,
  id,
  $view,
}: InputProps): JSX.Element {
  const renderContent = (view?: string) => {
    switch(view) {
      case "headerSearch":
        return <>
          <Button $view="headerSearch">
            <IconSearch />
          </Button>
        </>;
      case "footerEmail":
        return <>
          <Button $view="icon">
            <IconArrow />
          </Button>
        </>;
      default:
        return <>

        </>;
    }
  }
  
  return (
    <>
      {$view === "footerEmail" &&
        <Label htmlFor={id}>Подпишись на скидки и акции</Label>
      }
      <Wrapper 
        $view={$view}
      >
        <StyledInput
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          $view={$view}
        ></StyledInput>
        {renderContent($view)}
      </Wrapper>
    </>
  );
}

export default Input;