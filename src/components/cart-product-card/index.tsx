import { Block, ButtonWrapper, Description, Image, ImageWrapper, Price, ProductCountWrapper, TextWrapper, Title } from "./cart-product-card.styled";

import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { ICartItem } from "../../types/cart-item";
import { ReactComponent as IconBin } from "../../assets/icons/bin.svg";
import { ProductCount } from "../../components"
import ProductSize from "../product-size";
import { cutText } from "../../common/helpers/cut-text";

interface CartProductCardProps {
  cartItem: ICartItem;
}

function CartProductCard({ cartItem }: CartProductCardProps) {
  const { product, count } = cartItem;

  return (
    <Block>
      <ImageWrapper>
        <Image src={process.env.PUBLIC_URL + product.imageUrl} alt={product.title} height={190} width="auto" />
      </ImageWrapper>
      <TextWrapper>
        <ProductSize sizeType={product.sizeType} size={product.size} />
        <Title to={"/"}>{cutText(product.brand + " " + product.title, 40)}</Title>
        <Description>{cutText(product.description, 180)}</Description>
      </TextWrapper>
      <ProductCountWrapper>
        <ProductCount count={count} barcode={product.barcode} />
      </ProductCountWrapper>
      <Price>{(product.price * count).toLocaleString('ru-RU')} ₸</Price>
      <ButtonWrapper>
        <Button $view={ButtonView.Icon} $width="59px" $height="59px">
          <IconBin />
        </Button>
      </ButtonWrapper>
    </Block>
  );
}

export default CartProductCard;