import { Block, PhoneNumber, RequestCall, SecondaryText } from "./phone.styled";

import { Button } from "../../ui";
import { ReactComponent as IconPhone } from "../../assets/icons/phone-filled.svg";

interface PhoneProps {
  $isLocatedInMenu?: boolean;
}

function Phone({$isLocatedInMenu}: PhoneProps): JSX.Element {
  return (
    <Block $isLocatedInMenu={$isLocatedInMenu}>
      {!$isLocatedInMenu &&
      <>
        <PhoneNumber href="tel:+77774900091">+7 (777) 490-00-91</PhoneNumber>
        <SecondaryText>время работы: 9:00-20:00</SecondaryText>
      </>
      }
      {$isLocatedInMenu &&
        <Button $view="icon">
          <IconPhone />
        </Button>
      }
      <RequestCall type="button" $isLocatedInMenu={$isLocatedInMenu}>Заказать звонок</RequestCall>
    </Block>
  );
}

export default Phone;