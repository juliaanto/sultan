import { Block, CurrentSection, PreviousSection } from "./breadcrumbs.styled";

import { AppRoute } from "../../common/data/app-route";

interface BreadcrumbsProps {
  currentPage: string;
}

function Breadcrumbs({currentPage}: BreadcrumbsProps) {
  return (
    <Block>
      <PreviousSection to={AppRoute.Main}>Главная</PreviousSection>
      <CurrentSection>{currentPage}</CurrentSection>
    </Block>
  );
}

export default Breadcrumbs;