import { Block, CurrentSection, PreviousSection } from "./breadcrumbs.styled";

function Breadcrumbs() {
  return (
    <Block>
      <PreviousSection to="/">Главная</PreviousSection>
      <CurrentSection>Косметика и гигиена</CurrentSection>
    </Block>
  );
}

export default Breadcrumbs;