import { Block, ButtonWrapper, HeaderLink, LinkText, PhoneWrapper, StyledCatalogIcon } from "./top-bar.styled";
import { Button, Input } from "../../ui";
import { CartLink, Logo, Phone } from "../../components";

import useViewport from "../../common/hooks/useViewport";

function TopBar(): JSX.Element {
  const isMobile = useViewport();
  
  return (
      <Block>
        {!isMobile &&
          <Logo />
        }
        <HeaderLink to="/">
          <LinkText>Каталог</LinkText>
          <StyledCatalogIcon />
        </HeaderLink>
        <Input type="search" placeholder={isMobile ? "Поиск" : "Поиск..."} $view="headerSearch"></Input>
        {!isMobile &&
        <>
          <PhoneWrapper>
            <Phone />
          </PhoneWrapper>
          <ButtonWrapper>
            <Button $view="priceList" />
          </ButtonWrapper>
          <CartLink />
        </>
        }
      </Block>
  );
}

export default TopBar;