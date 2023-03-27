import Button, { ButtonView } from "../button";
import { Label, StyledInput, Wrapper } from "./input.styled";

import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

export enum InputView {
  headerSearch = "headerSearch",
  footerEmail = "footerEmail",
}

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  $view?: InputView;
}

function Input({
  type="text",
  placeholder,
  name,
  id,
  $view,
}: InputProps) {
  const renderContent = (view?: string) => {
    switch(view) {
      case InputView.headerSearch:
        return <>
          <Button $view={ButtonView.headerSearch}>
            <IconSearch />
          </Button>
        </>;
      case InputView.footerEmail:
        return <>
          <Button $view={ButtonView.icon}>
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
      {$view === InputView.footerEmail &&
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