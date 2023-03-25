import { Icon } from "./logo.styled";
import { Link } from "react-router-dom";

function Logo(): JSX.Element {
  return(
    <Link to="/">
      <Icon />
    </Link>
  );
}

export default Logo;