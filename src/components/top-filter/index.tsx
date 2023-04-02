import { Block, Input, Label, Wrapper } from "./top-filter.styled";
import { FilterBy, IFilters } from "../../types/filters";
import { filterCatalogProducts, getFilter, setProductTypeFilterValue } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

function TopFilter() {
  const filterData: IFilters = useAppSelector(getFilter);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductTypeFilterValue({ id: event.target.name, isChecked: event.target.checked }));
    dispatch(filterCatalogProducts());
  }
  
  return(
    <Block>
      {Object.values(filterData[FilterBy.ProductType]).map(({title, id, isChecked}) => (
        <Wrapper key={id}>
          <Input type="checkbox" id={"topFilter-" + id} name={id} checked={isChecked} onChange={handleChange} />
          <Label htmlFor={"topFilter-" + id}>{title}</Label>
        </Wrapper>
      ))}
    </Block>
  );
}

export default TopFilter;