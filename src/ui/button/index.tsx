import { ReactComponent as IconDownload } from "../../assets/icons/download.svg";
import { StyledButton } from "./button.styled";

export enum ButtonView {
  icon = "icon",
  headerSearch = "headerSearch",
  priceList = "priceList",
  footerEmail = "footerEmail",
}

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  $isLocatedInFooter?: boolean;
  $view?: ButtonView;
  $width?: string;
  $height?: string;
}

function Button({
  onClick,
  type = "button",
  children,
  $view,
  $width,
  $height,
  $isLocatedInFooter
}: ButtonProps) {
  const renderContent = (view?: string) => {
    switch(view) {
      case ButtonView.priceList:
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
      $width={$width}
      $height={$height}
      $isLocatedInFooter={$isLocatedInFooter}
    >
      {renderContent($view)}
    </StyledButton>
  );
}

export default Button;