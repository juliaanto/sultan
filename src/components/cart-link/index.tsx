import { Block, Cart, Icon, PrimaryText, SecondaryText, TextWrapper } from "./cart-link.styled";

import useViewport from "../../common/hooks/useViewport";

function CartLink() {
  const isMobile = useViewport();
  
  return (
    <Block to="/">
      <Cart $productsCount={3}>
        <Icon />
      </Cart>
      {!isMobile &&
        <TextWrapper>
          <SecondaryText>Корзина</SecondaryText>
          <PrimaryText>12 478 ₸</PrimaryText>
        </TextWrapper>
      }
    </Block>
  );
}

export default CartLink;