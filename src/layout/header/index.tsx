import { Block, Menu } from "./header.styled";
import { Contacts, Navigation, TopBar } from "../../components";

import useViewport from "../../common/hooks/useViewport";

function Header(): JSX.Element {
  const isMobile = useViewport();
  
  return (
    <Block>
      {!isMobile &&
        <Menu>
          <Contacts />
          <Navigation />
        </Menu>
      }
      <TopBar />
    </Block>
  );
}

export default Header;