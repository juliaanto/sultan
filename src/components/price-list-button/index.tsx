import { Button } from "../../ui";
import { ReactComponent as IconDownload } from "../../assets/icons/download.svg";

function PriceListButton(): JSX.Element {
  return (
    <Button $style="text">
      <span>Прайс-лист</span>
      <IconDownload />
    </Button>
  );
}

export default PriceListButton;