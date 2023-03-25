import { Block, ButtonWrapper, HeaderLink, LinkText, PhoneWrapper, StyledCatalogIcon } from "./top-bar.styled";
import { CartLink, Logo, Phone, PriceListButton } from "../../components";

import { Input } from "../../ui";
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
        <Input type="search" placeholder={isMobile ? "Поиск" : "Поиск..."} $style="headerSearch"></Input>
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