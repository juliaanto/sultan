import { ReactComponent as IconDownload } from "../../assets/icons/download.svg";
import { StyledButton } from "./button.styled";

export interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  $view?: "icon" | "headerSearch" | "priceList";
}

function Button({
  onClick,
  type = "button",
  children,
  $view,
}: ButtonProps): JSX.Element {
  const renderContent = (view?: string) => {
    switch(view) {
      case "priceList":
        return <>
          <span>Прайс-лист</span>
          <IconDownload />
        </>;
      default:
        return <>
          {children}
        </>;
    }
  }
  
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      $view={$view}
    >
      {renderContent($view)}
    </StyledButton>
  );
}

export default Button;