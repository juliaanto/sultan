import { Block, ButtonWrapper, HeaderLink, LinkText, PhoneWrapper } from "./top-bar.styled";

import CartLink from "../cart-link";
import { ReactComponent as IconCatalog } from "../../assets/icons/catalog-button.svg";
import { ReactComponent as IconLogo } from "../../assets/icons/logo.svg";
import { Input } from "../../ui";
import Phone from "../phone";
import PriceListButton from "../price-list-button";
import useViewport from "../../common/hooks/useViewport";

function TopBar(): JSX.Element {
  const isMobile = useViewport();
  
  return (
      <Block>
        {!isMobile &&
          <IconLogo />
        }
        <HeaderLink to="/">
          <LinkText>Каталог</LinkText>
          <IconCatalog />
        </HeaderLink>
        <Input type="search" placeholder="Поиск..."></Input>
        {!isMobile &&
        <>
          <PhoneWrapper>
            <Phone />
          </PhoneWrapper>
          <ButtonWrapper>
            <PriceListButton />
          </ButtonWrapper>
          <CartLink />
        </>
        }
      </Block>
  );
}

export default TopBar;