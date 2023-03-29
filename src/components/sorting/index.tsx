import { Block, Label, Option, Select } from "./sorting.styled";

import { SortBy } from "../../common/helpers/sort";

interface SortingProps {
  handleChangeSorting: (e: any) => void;
}

function Sorting({handleChangeSorting}: SortingProps) {
  return (
    <Block>
      <Label htmlFor="sorting">Сортировка:</Label>
      <Select name="sorting" id="sorting" onChange={handleChangeSorting}>
        <Option value={SortBy.titleAsc}>Название по возрастанию</Option>
        <Option value={SortBy.titleDesc}>Название по убыванию </Option>
        <Option value={SortBy.priceAsc}>Цена по возрастанию</Option>
        <Option value={SortBy.priceDesc}>Цена по убыванию</Option>
      </Select>
    </Block>
  );
}

export default Sorting;