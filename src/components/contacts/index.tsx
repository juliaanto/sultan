import { Block, Contact, IconWrapper, Mail, PrimaryText, SecondaryText, TextWrapper, WorkingHours } from "./contacts.styled";

import { ReactComponent as IconLocation } from "../../assets/icons/location.svg";
import { ReactComponent as IconMail } from "../../assets/icons/mail.svg";
import { ReactComponent as IconPhone } from "../../assets/icons/phone.svg";
import useViewport from "../../common/hooks/useViewport";

function Contacts(): JSX.Element {
  const isMobile = useViewport();
  
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
      {isMobile &&
      <>
        <Contact>
          <IconWrapper>
            <IconPhone />
          </IconWrapper>
          <TextWrapper>
            <PrimaryText>Отдел продаж</PrimaryText>
            <SecondaryText>+7 (777) 490-00-91</SecondaryText>
          </TextWrapper>
        </Contact>
        <WorkingHours>время работы: 9:00-20:00</WorkingHours>
      </>
      }
    </Block>
  );
}

export default Contacts;