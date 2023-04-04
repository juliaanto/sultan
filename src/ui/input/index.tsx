import Button, { ButtonView } from "../button";
import { Label, LabelWrapper, StyledInput, Wrapper } from "./input.styled";

import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";

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
  value?: string | number | readonly string[] | undefined;
  $view?: InputView;
  $label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type="text",
  placeholder,
  name,
  id,
  value,
  $view,
  $label,
  onChange,
}: InputProps) {
  switch($view) {
    case InputView.Search:
      return (
        <Wrapper 
          $view={$view}
        >
          <StyledInput
            type={$view === InputView.Search ? "search" : type}
            placeholder={!placeholder && $view === InputView.Search ? "Поиск..." : placeholder}
            name={name}
            id={id}
            value={value}
            $view={$view}
            onChange={onChange}
          ></StyledInput>
          <Button $view={ButtonView.Search}>
            <IconSearch />
          </Button>
        </Wrapper>
      )
    case InputView.FooterEmail:
      return (
        <>
          <Label htmlFor={id} $view={InputView.FooterEmail}>Подпишись на скидки и акции</Label>
          <Wrapper 
            $view={$view}
          >
            <StyledInput
              type="search"
              placeholder={!placeholder ? "Поиск..." : placeholder}
              name={name}
              id={id}
              value={value}
              $view={$view}
              onChange={onChange}
            ></StyledInput>
            <Button $view={ButtonView.FooterEmail}>
              <IconArrow />
            </Button>
          </Wrapper>
        </>

      )
    default:
      return (
        <LabelWrapper>
          {$label &&
            <Label htmlFor={id}>{$label}</Label>
          }
            <StyledInput
              type={type}
              placeholder={placeholder}
              name={name}
              id={id}
              value={value}
              $view={$view}
              onChange={onChange}
            ></StyledInput>
          </LabelWrapper>
      ) 
  }
}

export default Input;