import { ReactComponent as IconCart } from "../../assets/icons/cart.svg";
import { ReactComponent as IconDownload } from "../../assets/icons/download.svg";
import { StyledButton } from "./button.styled";
import { addProduct } from "../../store/products/productsSlice";
import { useAppDispatch } from "../../app/hooks";

export enum ButtonView {
  Icon = "icon",
  Search = "search",
  PriceList = "priceList",
  FooterEmail = "footerEmail",
  AddToCart = "addToCart",
}

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  $isLocatedInFooter?: boolean;
  $view?: ButtonView;
  $width?: string;
  $height?: string;
  $productBarcode?: number;
}

function Button({
  onClick,
  type = "button",
  children,
  $view,
  $width,
  $height,
  $isLocatedInFooter,
  $productBarcode,
}: ButtonProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    $productBarcode && dispatch(addProduct($productBarcode));
  }
  
  const renderContent = (view?: string) => {
    switch(view) {
      case ButtonView.PriceList:
        return <>
          <span>Прайс-лист</span>
          <IconDownload />
        </>;
      case ButtonView.AddToCart:
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
      onClick={$view === ButtonView.AddToCart ? handleAddToCart : onClick}
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