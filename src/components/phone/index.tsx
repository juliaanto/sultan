import { Block, PhoneNumber, RequestCall, SecondaryText } from "./phone.styled";

import { Button } from "../../ui";
import { ReactComponent as IconPhone } from "../../assets/icons/phone-filled.svg";

interface PhoneProps {
  $isLocatedInMenu?: boolean;
  $isLocatedInFooter?: boolean;
}

function Phone({$isLocatedInMenu, $isLocatedInFooter}: PhoneProps): JSX.Element {
  return (
    <Block 
      $isLocatedInMenu={$isLocatedInMenu} 
      $isLocatedInFooter={$isLocatedInFooter}
    >
      {!$isLocatedInMenu &&
      <>
        <PhoneNumber 
          href="tel:+77774900091" 
          $isLocatedInFooter={$isLocatedInFooter}
        >
          +7 (777) 490-00-91
        </PhoneNumber>
        <SecondaryText 
          $isLocatedInFooter={$isLocatedInFooter}
        >
          время работы: 9:00-20:00
        </SecondaryText>
      </>
      }
      {$isLocatedInMenu &&
        <Button $view="icon">
          <IconPhone />
        </Button>
      }
      <RequestCall 
        type="button" 
        $isLocatedInMenu={$isLocatedInMenu} 
        $isLocatedInFooter={$isLocatedInFooter}
      >
        Заказать звонок
      </RequestCall>
    </Block>
  );
}

export default Phone;