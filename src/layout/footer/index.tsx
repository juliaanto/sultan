import { Block, Column, CommunicationTitle, CommunicationWrapper, Content, Heading, IconLink, PaymentMethodsWrapper, Text, Wrapper } from "./footer.styled";
import { Button, Input } from "../../ui";
import { Contacts, Logo, Navigation, Phone } from "../../components";

import { ButtonView } from "../../ui/button";
import { ReactComponent as IconMastercard } from "../../assets/icons/logo-mastercard.svg";
import { ReactComponent as IconTelegram } from "../../assets/icons/logo-telegram.svg";
import { ReactComponent as IconVisa } from "../../assets/icons/logo-visa.svg";
import { ReactComponent as IconWhatsApp } from "../../assets/icons/logo-whatsapp.svg";
import { InputView } from "../../ui/input";
import { categories } from "../../common/data/categories";
import { siteMenu } from "../../common/data/site-menu";

function Footer() {
  return (
    <Block>
      <Wrapper>
        <Content>
          <Column>
            <Logo $isLight />
            <Text>Компания «Султан» — снабжаем розничные магазины товарами "под&nbsp;ключ" в Кокчетаве и Акмолинской области</Text>
            <Input type="email" placeholder="Введите ваш E-mail" id="subscription-email" name="subscription-email" $view={InputView.footerEmail} />
          </Column>
          <Column>
            <Heading>Меню сайта:</Heading>
            <Navigation sections={siteMenu} $isLocatedInFooter />
          </Column>
          <Column>
            <Heading>Категории:</Heading>
            <Navigation sections={categories} $isLocatedInFooter />
          </Column>
          <Column>
            <Heading>Скачать прайс-лист:</Heading>
            <Button $view={ButtonView.priceList} />
            <CommunicationTitle>Связь в мессенджерах:</CommunicationTitle>
            <CommunicationWrapper>
              <IconLink href="/">
                <IconWhatsApp />
              </IconLink>
              <IconLink href="/">
                <IconTelegram />
              </IconLink>
            </CommunicationWrapper>
          </Column>
          <Column>
            <Heading>Контакты:</Heading>
            <Phone $isLocatedInFooter />
            <Contacts $isLocatedInFooter />
            <PaymentMethodsWrapper>
              <IconLink href="/">
                <IconVisa />
              </IconLink>
              <IconLink href="/">
                <IconMastercard />
              </IconLink>
            </PaymentMethodsWrapper>
          </Column>
        </Content>
      </Wrapper>
    </Block>
  );
}

export default Footer;