import Button, { ButtonView } from "../button";
import { Label, StyledInput, Wrapper } from "./input.styled";

import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";
import { MutableRefObject } from "react";

export enum InputView {
  Search = "search",
  FooterEmail = "footerEmail",
  Number = "number",
}

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  innerRef?: MutableRefObject<HTMLInputElement | null>;
  $view?: InputView;
}

function Input({
  type="text",
  placeholder,
  name,
  id,
  innerRef,
  $view,
}: InputProps) {
  const renderContent = (view?: string) => {
    switch(view) {
      case InputView.Search:
        return <>
          <Button $view={ButtonView.Search}>
            <IconSearch />
          </Button>
        </>;
      case InputView.FooterEmail:
        return <>
          <Button $view={ButtonView.FooterEmail}>
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
      {$view === InputView.FooterEmail &&
        <Label htmlFor={id}>Подпишись на скидки и акции</Label>
      }
      <Wrapper 
        $view={$view}
      >
        <StyledInput
          type={$view === InputView.Search ? "search" : type}
          placeholder={!placeholder && $view === InputView.Search ? "Поиск..." : placeholder}
          name={name}
          id={id}
          ref={innerRef}
          $view={$view}
        ></StyledInput>
        {renderContent($view)}
      </Wrapper>
    </>
  );
}

export default Input;