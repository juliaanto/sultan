import { Background, Block, ButtonWrapper, Heading, Wrapper } from "./menu.styled";
import { Contacts, Navigation, Phone } from "../../components";

import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { siteMenu } from "../../common/data/site-menu";

function Menu() {
  return (
    <Background>
      <Wrapper>
        <Block>
          <Contacts />
          <Phone $isLocatedInMenu />
          <Heading>Меню сайта:</Heading>
          <Navigation sections={siteMenu} />
          <ButtonWrapper>
            <Button $view={ButtonView.priceList} />
          </ButtonWrapper>
        </Block>
      </Wrapper>
    </Background>
  );
}

export default Menu;