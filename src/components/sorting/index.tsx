import { Block, Label, Option, Select } from "./sorting.styled";
import { useEffect, useState } from "react";

import { SortBy } from "../../common/helpers/sort";
import { sortCatalogProducts } from "../../store/products/productsSlice";
import { useAppDispatch } from "../../app/hooks";

function Sorting() {
  const dispatch = useAppDispatch();
  const [currentSort, setCurrentSort] = useState<SortBy>(SortBy.TitleAsc);

  useEffect(() => {
    dispatch(sortCatalogProducts(currentSort));
  }, [currentSort, dispatch]);
  
  return (
    <Block>
      <Label htmlFor="sorting">Сортировка:</Label>
      <Select 
        name="sorting" 
        id="sorting" 
        defaultValue={currentSort}
        onChange={(event) => setCurrentSort(event.target.value as unknown as SortBy)}
      >
        <Option value={SortBy.TitleAsc}>Название по возрастанию</Option>
        <Option value={SortBy.TitleDesc}>Название по убыванию </Option>
        <Option value={SortBy.PriceAsc}>Цена по возрастанию</Option>
        <Option value={SortBy.PriceDesc}>Цена по убыванию</Option>
      </Select>
    </Block>
  );
}

export default Sorting;