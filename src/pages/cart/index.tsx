import { Block, BottomLine, Content, Message, TotalPrice } from "./cart.styled";
import { Breadcrumbs, CartProductList, Heading } from "../../components";
import { clearCart, getCartProducts } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { Button } from "../../ui";
import Page from "../../layout/page";
import { getCartTotalPrice } from "../../common/helpers/cart";
import { useEffect } from "react";

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartProducts);
  const totalPrice = getCartTotalPrice(cartItems);
  
  useEffect(() => {
    document.title = "Корзина | Султан";
  }, []);

  const handleSubmitButtonClick = () => {
    dispatch(clearCart());
  }
  
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
                <Button $width="192px" $height="59px" onClick={handleSubmitButtonClick}>Оформить заказ</Button>
                <TotalPrice>{totalPrice.toLocaleString('ru-RU')} ₸</TotalPrice>
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