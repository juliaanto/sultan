import { MenuBar, TopBar } from "../../components";

import { Block } from "./header.styled";

function Header() {
  return (
    <Block>
      <MenuBar />
      <TopBar />
    </Block>
  );
}

export default Header;