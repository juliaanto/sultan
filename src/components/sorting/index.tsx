import { Block, Label, Option, Select } from "./sorting.styled";

function Sorting() {
  return (
    <Block>
      <Label htmlFor="sorting">Сортировка:</Label>
      <Select name="sorting" id="sorting">
        <Option value="title-asc">Название по возрастанию</Option>
        <Option value="title-desc">Название по убыванию </Option>
        <Option value="price-asc">Цена по возрастанию</Option>
        <Option value="price-desc">Цена по убыванию</Option>
      </Select>
    </Block>
  );
}

export default Sorting;