import { Block, ButtonWrapper, Cart, CartLink, HeaderLink, LinkText, Phone, PhoneNumber, PhoneWrapper, PrimaryText, RequestCall, SecondaryText, TextWrapper } from "./top-bar.styled";
import { Button, Input } from "../../ui";

import { ReactComponent as IconCart } from "../../assets/icons/cart.svg";
import { ReactComponent as IconCatalog } from "../../assets/icons/catalog-button.svg";
import { ReactComponent as IconDownload } from "../../assets/icons/download.svg";
import { ReactComponent as IconLogo } from "../../assets/icons/logo.svg";

function TopBar(): JSX.Element {
  return (
      <Block>
        <IconLogo />
        <HeaderLink to="/">
          <LinkText>Каталог</LinkText>
          <IconCatalog />
        </HeaderLink>
        <Input type="search" placeholder="Поиск..."></Input>
        <PhoneWrapper>
          <Phone>
            <PhoneNumber href="tel:+77774900091">+7 (777) 490-00-91</PhoneNumber>
            <SecondaryText>время работы: 9:00-20:00</SecondaryText>
            <RequestCall href="/">Заказать звонок</RequestCall>
          </Phone>
        </PhoneWrapper>
        <ButtonWrapper>
          <Button $style="text">
            <span>Прайс-лист</span>
            <IconDownload />
          </Button>
        </ButtonWrapper>
        <CartLink to="/">
          <Cart $productsCount={3}>
            <IconCart />
          </Cart>
          <TextWrapper>
            <SecondaryText>Корзина</SecondaryText>
            <PrimaryText>12 478 ₸</PrimaryText>
          </TextWrapper>
        </CartLink>
      </Block>
  );
}

export default TopBar;