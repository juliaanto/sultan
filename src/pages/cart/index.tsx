import { Block, BottomLine, Content, Message, TotalPrice } from "./cart.styled";
import { Breadcrumbs, CartProductList, Heading } from "../../components";

import { Button } from "../../ui";
import Page from "../../layout/page";
import { getCartProducts } from "../../store/products/productsSlice";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from "react";

function Cart() {
  const cartItems = useAppSelector(getCartProducts);
  
  useEffect(() => {
    document.title = "Корзина | Султан";
  }, []);
  
  return (
    <Page>
      <Block>
        <Content>
          <Breadcrumbs currentPage="Корзина" />
          <Heading>Корзина</Heading>
          {cartItems.length > 0 ?
            <>
              <CartProductList cartItems={cartItems} />
              <BottomLine>
                <Button $width="192px" $height="59px">Оформить заказ</Button>
                <TotalPrice>1 348,76 ₸</TotalPrice>
              </BottomLine>
            </>
            :
            <Message>Корзина пуста</Message>
          }
        </Content>
      </Block>
    </Page>

  );
}

export default Cart;