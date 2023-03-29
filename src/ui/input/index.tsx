import Button, { ButtonView } from "../button";
import { Label, StyledInput, Wrapper } from "./input.styled";

import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

export enum InputView {
  search = "search",
  footerEmail = "footerEmail",
  number = "number",
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
      case InputView.search:
        return <>
          <Button $view={ButtonView.search}>
            <IconSearch />
          </Button>
        </>;
      case InputView.footerEmail:
        return <>
          <Button $view={ButtonView.footerEmail}>
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
          type={$view === InputView.search ? "search" : type}
          placeholder={!placeholder && $view === InputView.search ? "Поиск..." : placeholder}
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