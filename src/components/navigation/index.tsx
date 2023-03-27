import { Block, Item, Link, List } from "./navigation.styled";

interface NavigationProps {
  sections: {
    title: string;
    link: string;
  }[];
  $isLocatedInFooter?: boolean;
}


function Navigation({sections, $isLocatedInFooter}: NavigationProps): JSX.Element {
  return (
    <Block>
      <List $isLocatedInFooter={$isLocatedInFooter}>
        {sections.map((section, index) => (
          <Item $isLocatedInFooter={$isLocatedInFooter} key={index}>
            <Link href={section.link} $isLocatedInFooter={$isLocatedInFooter}>{section.title}</Link>
          </Item>
        ))}
      </List>
    </Block>
  );
}

export default Navigation;