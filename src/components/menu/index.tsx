import { Background, Block, ButtonWrapper, Heading, Wrapper } from "./menu.styled";
import { Contacts, Navigation, Phone } from "../../components";

import { Button } from "../../ui";

function Menu(): JSX.Element {
  return (
    <Background>
      <Wrapper>
        <Block>
          <Contacts />
          <Phone $isLocatedInMenu />
          <Heading>Меню сайта:</Heading>
          <Navigation />
          <ButtonWrapper>
            <Button $view="priceList" />
          </ButtonWrapper>
        </Block>
      </Wrapper>
    </Background>
  );
}

export default Menu;