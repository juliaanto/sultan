import { ReactComponent as IconCart } from "../../assets/icons/cart.svg";
import { ReactComponent as IconDownload } from "../../assets/icons/download.svg";
import { StyledButton } from "./button.styled";

export enum ButtonView {
  Icon = "icon",
  Search = "search",
  PriceList = "priceList",
  FooterEmail = "footerEmail",
  AddToCart = "addToCart",
  AddToCartFromProductPage = "addToCartFromProductPage"
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
  $isLocatedInFooter,
}: ButtonProps) {
  const renderContent = (view?: string) => {
    switch(view) {
      case ButtonView.PriceList:
        return <>
          <span>Прайс-лист</span>
          <IconDownload />
        </>;
      case ButtonView.AddToCart:
      case ButtonView.AddToCartFromProductPage:
        return <>
          <span>В корзину</span>
          <IconCart />
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