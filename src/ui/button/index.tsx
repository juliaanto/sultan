import { StyledButton } from "./button.styled";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children?: JSX.Element| JSX.Element[] | string;
  $style?: "text" | "headerSearch";
}

function Button({
  type = "button",
  children,
  $style,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      type={type}
      $style={$style}
    >
      {children}
    </StyledButton>
  );
}

export default Button;