import { Block, Fieldset, Heading, Legend, Text } from "./side-filter.styled";
import { Button, Checkbox, Input } from "../../ui";

import { InputView } from "../../ui/input";

interface SideFilterProps {
  itemSets: {
    filterName: string;
    filterCode: string;
    items: (string | number)[];
  }[]
}

function SideFilter({itemSets}: SideFilterProps) {
  return (
    <Block>
      <Heading>Подбор по параметрам</Heading>
      <Fieldset>
        <Legend>Цена ₸</Legend>
        <Input type="number" $view={InputView.number} placeholder="0" name="priceMin" id="priceMin" />
        <Text>-</Text>
        <Input type="number" $view={InputView.number} placeholder="10 000" name="priceMax" id="priceMax" />
      </Fieldset>
      {itemSets.map(({filterName, filterCode, items}) => (
        <Checkbox filterName={filterName} filterCode={filterCode} items={items} key={filterCode} />
      ))}
      <Button $width="169px" $height="59px">Показать</Button>
    </Block>
  );
}

export default SideFilter;