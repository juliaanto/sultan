import { Block, Label, Option, Select } from "./sorting.styled";

import { SortBy } from "../../common/helpers/sort";
import { sortCatalogProducts } from "../../store/products/productsSlice";
import { useAppDispatch } from "../../app/hooks";

function Sorting() {
  const dispatch = useAppDispatch();
  
  const handleChangeSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType: SortBy = event.target?.value as unknown as SortBy;
    dispatch(sortCatalogProducts(sortType));
  }
  
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