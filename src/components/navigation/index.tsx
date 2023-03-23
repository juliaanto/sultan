import { Block, Item, Link, List } from "./navigation.styled";

function Navigation(): JSX.Element {
  return (
    <Block>
      <List>
        <Item>
          <Link href="#">О компании</Link>
        </Item>
        <Item>
          <Link href="#">Доставка и оплата</Link>
        </Item>
        <Item>
          <Link href="#">Возврат</Link>
        </Item>
        <Item>
          <Link href="#">Контакты</Link>
        </Item>
      </List>
    </Block>
  );
}

export default Navigation;