import { ButtonSymbol, DesktopMenuBar, MobileMenuBar } from "./menu-bar.styled";
import { CartLink, Contacts, Logo, Menu, Navigation } from "../../components";

import { Button } from "../../ui";
import { siteMenu } from "../../common/data/site-menu";
import { useState } from "react";
import useViewport from "../../common/hooks/useViewport";

function MenuBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useViewport();

  return (
    <>
      {isMobile ?
        <MobileMenuBar>
          <Button $view="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ButtonSymbol $isOpen={isMenuOpen} />
          </Button>
          <Logo />
          <CartLink />
        </MobileMenuBar>
        :
        <DesktopMenuBar>
          <Contacts />
          <Navigation sections={siteMenu} />
        </DesktopMenuBar>
      }
      {isMobile && isMenuOpen &&
        <Menu />
      }
    </>
  );
}

export default MenuBar;