import { ButtonSymbol, DesktopMenuBar, MobileMenuBar } from "./menu-bar.styled";
import { CartLink, Contacts, Logo, Navigation } from "../../components";

import { Button } from "../../ui";
import useViewport from "../../common/hooks/useViewport";

function MenuBar(): JSX.Element {
  const isMobile = useViewport();

  return (
    <>
      {isMobile ?
        <MobileMenuBar>
          <Button>
            <ButtonSymbol />
          </Button>
          <Logo />
          <CartLink />
        </MobileMenuBar>
        :
        <DesktopMenuBar>
          <Contacts />
          <Navigation />
        </DesktopMenuBar>
      }
    </>
  );
}

export default MenuBar;