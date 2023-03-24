import { Block, Contact, IconWrapper, Mail, PrimaryText, SecondaryText, TextWrapper } from "./contacts.styled";

import { ReactComponent as IconLocation } from "../../assets/icons/location.svg";
import { ReactComponent as IconMail } from "../../assets/icons/mail.svg";

function Contacts(): JSX.Element {
  return (
    <Block>
      <Contact>
        <IconWrapper>
          <IconLocation />
        </IconWrapper>
        <TextWrapper>
          <PrimaryText>г. Кокчетав, ул. Ж. Ташенова 129Б</PrimaryText>
          <SecondaryText>(Рынок Восточный)</SecondaryText>
        </TextWrapper>
      </Contact>
      <Contact>
        <IconWrapper>
          <IconMail />
        </IconWrapper>
        <TextWrapper>
          <Mail href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Mail>
          <SecondaryText>На связи в любое время</SecondaryText>
        </TextWrapper>
      </Contact>
    </Block>
  );
}

export default Contacts;