import { Background, Block, ButtonWrapper, Heading, Wrapper } from "./menu.styled";
import { Contacts, Navigation, Phone } from "../../components";

import { Button } from "../../ui";
import { siteMenu } from "../../common/data/site-menu";

function Menu(): JSX.Element {
  return (
    <Background>
      <Wrapper>
        <Block>
          <Contacts />
          <Phone $isLocatedInMenu />
          <Heading>Меню сайта:</Heading>
          <Navigation sections={siteMenu} />
          <ButtonWrapper>
            <Button $view="priceList" />
          </ButtonWrapper>
        </Block>
      </Wrapper>
    </Background>
  );
}

export default Menu;