import { Block, Column, CommunicationWrapperMobile, Content, Heading, Icon, LogoWrapper, PaymentMethodsWrapper, Text } from "./footer.styled";
import { Button, Input } from "../../ui";
import { Communication, Contacts, Logo, Navigation, Phone } from "../../components";

import { ButtonView } from "../../ui/button";
import { ReactComponent as IconMastercard } from "../../assets/icons/logo-mastercard.svg";
import { ReactComponent as IconVisa } from "../../assets/icons/logo-visa.svg";
import { InputView } from "../../ui/input";
import { categories } from "../../common/data/categories";
import { siteMenu } from "../../common/data/site-menu";
import useViewport from "../../common/hooks/useViewport";

function Footer() {
  const isMobile = useViewport();
  
  return (
    <Block>
      <Content>
          <Column>
            <LogoWrapper>
              <Logo $isLight />
              {isMobile &&
                <Button $view={ButtonView.PriceList} $width={"149px"} $height={"40px"} $isLocatedInFooter />
              }
            </LogoWrapper>
            <Text>Компания «Султан» — снабжаем розничные магазины товарами "под&nbsp;ключ" в Кокчетаве и&nbsp;Акмолинской области</Text>
            <Input type="email" placeholder="Введите ваш E-mail" id="subscription-email" name="subscription-email" $view={InputView.FooterEmail} />
          </Column>
          <Column>
            <Heading>Меню сайта:</Heading>
            <Navigation sections={siteMenu} $isLocatedInFooter />
          </Column>
          <Column>
            <Heading>Категории:</Heading>
            <Navigation sections={categories} $isLocatedInFooter />
          </Column>
          {!isMobile &&
            <Column>
              <Heading>Скачать прайс-лист:</Heading>
              <Button $view={ButtonView.PriceList} $width={"214px"} $height={"59px"} />
              <Communication />
            </Column>
          }
          <Column>
            <Heading>Контакты:</Heading>
            <Phone $isLocatedInFooter />
            <Contacts $isLocatedInFooter />
            <PaymentMethodsWrapper>
              <Icon>
                <IconVisa />
              </Icon>
              <Icon>
                <IconMastercard />
              </Icon>
            </PaymentMethodsWrapper>
          </Column>
          {isMobile &&
          <CommunicationWrapperMobile>
            <Communication />
          </CommunicationWrapperMobile>
        }
      </Content>
    </Block>
  );
}

export default Footer;