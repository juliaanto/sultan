import { Block, ButtonWrapper, HeaderLink, LinkText, PhoneWrapper, StyledCatalogIcon } from "./top-bar.styled";
import { Button, Input } from "../../ui";
import { CartLink, Logo, Phone } from "../../components";

import { AppRoute } from "../../common/data/app-route";
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
        <HeaderLink to={AppRoute.Catalog}>
          <LinkText>Каталог</LinkText>
          <StyledCatalogIcon />
        </HeaderLink>
        <Input placeholder={isMobile ? "Поиск" : "Поиск..."} $view={InputView.Search}></Input>
        {!isMobile &&
        <>
          <PhoneWrapper>
            <Phone />
          </PhoneWrapper>
          <ButtonWrapper>
            <Button $view={ButtonView.PriceList} $width={"200px"} />
          </ButtonWrapper>
          <CartLink />
        </>
        }
      </Block>
  );
}

export default TopBar;