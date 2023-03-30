import { Block, Fieldset, Heading, Legend, Text } from "./side-filter.styled";
import { Button, Checkbox, Input } from "../../ui";
import { getProductTypeFilter, setFilterValue } from "../../store/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { IFilterData } from "../../types/filter-data";
import { InputView } from "../../ui/input";

interface SideFilterProps {
  itemSets: {
    filterName: string;
    items: IFilterData;
  }[]
}

function SideFilter({itemSets}: SideFilterProps) {
  const filterData: IFilterData = useAppSelector(getProductTypeFilter);
  const dispatch = useAppDispatch();

  const handleInputFromStoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const isChecked = event.target.checked;
    
    dispatch(setFilterValue({ id, isChecked }));
  }
  
  return (
    <Block>
      <Heading>Подбор по параметрам</Heading>
      <Fieldset>
        <Legend>Цена ₸</Legend>
        <Input type="number" $view={InputView.number} placeholder="0" name="priceMin" id="priceMin" />
        <Text>-</Text>
        <Input type="number" $view={InputView.number} placeholder="10 000" name="priceMax" id="priceMax" />
      </Fieldset>
      {itemSets.map(({filterName, items}, index) => (
        <Checkbox filterName={filterName} items={items} key={index} />
      ))}
      <Checkbox filterName="Тип ухода" items={filterData} onInputChange={handleInputFromStoreChange} />
      <Button $width="169px" $height="59px">Показать</Button>
    </Block>
  );
}

export default SideFilter;