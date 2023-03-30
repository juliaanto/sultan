import { Block, Input, Label, Wrapper } from "./top-filter.styled";
import { filterCatalogProducts, getProductTypeFilter, setFilterValue } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { FilterBy } from "../../common/helpers/filter";
import { IFilterData } from "../../types/filter-data";

function TopFilter() {
  const filterData: IFilterData = useAppSelector(getProductTypeFilter);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterValue({ id: event.target.name, isChecked: event.target.checked }));
    dispatch(filterCatalogProducts({ filterBy: FilterBy.productType }));
  }
  
  return(
    <Block>
      {Object.values(filterData).map(({title, id, isChecked}) => (
        <Wrapper key={id}>
          <Input type="checkbox" id={"topFilter-" + id} name={id} checked={isChecked} onChange={handleChange} />
          <Label htmlFor={"topFilter-" + id}>{title}</Label>
        </Wrapper>
      ))}
    </Block>
  );
}

export default TopFilter;