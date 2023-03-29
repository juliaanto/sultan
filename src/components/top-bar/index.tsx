import { Block, ButtonWrapper, HeaderLink, LinkText, PhoneWrapper, StyledCatalogIcon } from "./top-bar.styled";
import { Button, Input } from "../../ui";
import { CartLink, Logo, Phone } from "../../components";

import { ButtonView } from "../../ui/button";
import { InputView } from "../../ui/input";
import useViewport from "../../common/hooks/useViewport";

function TopBar() {
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
        <Input placeholder={isMobile ? "Поиск" : "Поиск..."} $view={InputView.search}></Input>
        {!isMobile &&
        <>
          <PhoneWrapper>
            <Phone />
          </PhoneWrapper>
          <ButtonWrapper>
            <Button $view={ButtonView.priceList} $width={"200px"} />
          </ButtonWrapper>
          <CartLink />
        </>
        }
      </Block>
  );
}

export default TopBar;