import { Block, CurrentSection, PreviousSection } from "./breadcrumbs.styled";

import { AppRoute } from "../../common/data/app-route";

interface BreadcrumbsProps {
  currentPageName: string;
  previousSections?: {
    pageName: string;
    pageLink: AppRoute;
  }[];
}

function Breadcrumbs({currentPageName, previousSections}: BreadcrumbsProps) {
  return (
    <Block>
      <PreviousSection to={AppRoute.Main}>Главная</PreviousSection>
      {previousSections &&
        previousSections.map((section, index) => (
          <PreviousSection to={section.pageLink} key={index}>{section.pageName}</PreviousSection>
        ))
      }
      <CurrentSection>{currentPageName}</CurrentSection>
    </Block>
  );
}

export default Breadcrumbs;