import { IconLink, Title, Wrapper } from "./communication.styled";

import { ReactComponent as IconTelegram } from "../../assets/icons/logo-telegram.svg";
import { ReactComponent as IconWhatsApp } from "../../assets/icons/logo-whatsapp.svg";

function Communication() {
  return (
    <>
      <Title>Связь в мессенджерах:</Title>
      <Wrapper>
        <IconLink href="/">
          <IconWhatsApp />
        </IconLink>
        <IconLink href="/">
          <IconTelegram />
        </IconLink>
      </Wrapper>
    </>
  );
}

export default Communication;