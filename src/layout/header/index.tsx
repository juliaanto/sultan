import { Contacts, Navigation } from '../../components';

import { Block } from './header.styled';

function Header(): JSX.Element {
  return (
    <Block>
      <Contacts />
      <Navigation />
    </Block>
  );
}

export default Header;