import { Block, ButtonWrapper, Description, Image, ImageWrapper, Price, ProductCountWrapper, TextWrapper, Title } from "./cart-product-card.styled";
import { addProduct, removeOneItem, removeProductFromCart } from "../../store/products/productsSlice";

import { AppLink } from "../../common/data/app-route";
import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { ICartItem } from "../../types/cart-item";
import { ReactComponent as IconBin } from "../../assets/icons/bin.svg";
import { ProductCount } from "../../components"
import ProductSize from "../product-size";
import { cutText } from "../../common/helpers/cut-text";
import { useAppDispatch } from "../../app/hooks";

interface CartProductCardProps {
  cartItem: ICartItem;
}

function CartProductCard({ cartItem }: CartProductCardProps) {
  const dispatch = useAppDispatch();
  const { product, count } = cartItem;

  return (
    <Block>
      <ImageWrapper>
        <Image src={product.imageUrl} alt={product.title} height={190} width={280} />
      </ImageWrapper>
      <TextWrapper>
        <ProductSize sizeType={product.sizeType} size={product.size} />
        <Title to={AppLink.ProductById(product.barcode)}>{cutText(product.brand + " " + product.title, 40)}</Title>
        <Description>{cutText(product.description, 180)}</Description>
      </TextWrapper>
      <ProductCountWrapper>
        <ProductCount 
          count={count}
          onRemoveButtonClick={() => dispatch(removeOneItem(product.barcode))}
          onAddButtonClick={() => dispatch(addProduct({barcode: product.barcode, count: count + 1}))}
        />
      </ProductCountWrapper>
      <Price>{(product.price * count).toLocaleString('ru-RU')} ₸</Price>
      <ButtonWrapper>
        <Button $view={ButtonView.Icon} $width="59px" $height="59px" onClick={() => dispatch(removeProductFromCart(product.barcode))}>
          <IconBin />
        </Button>
      </ButtonWrapper>
    </Block>
  );
}

export default CartProductCard;