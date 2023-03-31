import { Block, Cart, Icon, PrimaryText, SecondaryText, TextWrapper } from "./cart-link.styled";
import { getCartItemsTotalCount, getCartTotalPrice } from "../../common/helpers/cart";

import { AppRoute } from "../../common/data/app-route";
import { getCartProducts } from "../../store/products/productsSlice";
import { useAppSelector } from "../../app/hooks";
import useViewport from "../../common/hooks/useViewport";

function CartLink() {
  const isMobile = useViewport();
  const cartItems = useAppSelector(getCartProducts);
  
  const count = getCartItemsTotalCount(cartItems);
  const totalPrice = getCartTotalPrice(cartItems);
  
  return (
    <Block to={AppRoute.Cart}>
      <Cart $productsCount={count}>
        <Icon />
      </Cart>
      {!isMobile &&
        <TextWrapper>
          <SecondaryText>Корзина</SecondaryText>
          <PrimaryText>{totalPrice.toLocaleString('ru-RU')} ₸</PrimaryText>
        </TextWrapper>
      }
    </Block>
  );
}

export default CartLink;