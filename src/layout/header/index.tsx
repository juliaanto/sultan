import { Block, Menu } from "./header.styled";
import { Contacts, Navigation, TopBar } from "../../components";

function Header(): JSX.Element {
  return (
    <Block>
      <Menu>
        <Contacts />
        <Navigation />
      </Menu>
      <TopBar />
    </Block>
  );
}

export default Header;