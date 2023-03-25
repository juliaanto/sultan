import { Block, Cart, PrimaryText, SecondaryText, TextWrapper } from "./cart-link.styled";

import { ReactComponent as IconCart } from "../../assets/icons/cart.svg";

function CartLink(): JSX.Element {
  return (
    <Block to="/">
      <Cart $productsCount={3}>
        <IconCart />
      </Cart>
      <TextWrapper>
        <SecondaryText>Корзина</SecondaryText>
        <PrimaryText>12 478 ₸</PrimaryText>
      </TextWrapper>
    </Block>
  );
}

export default CartLink;