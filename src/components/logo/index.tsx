import { AppRoute } from "../../common/data/app-route";
import { Icon } from "./logo.styled";
import { Link } from "react-router-dom";

interface LogoProps {
  $isLight?: boolean;
}

function Logo({$isLight}: LogoProps) {
  return(
    <Link to={AppRoute.Main}>
      <Icon $isLight={$isLight} />
    </Link>
  );
}

export default Logo;