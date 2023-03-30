import { Block, Input, Label, Wrapper } from "./top-filter.styled";
import { getProductTypeFilter, setFilterValue } from "../../store/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { IFilterData } from "../../types/filter-data";

function TopFilter() {
  const filterData: IFilterData = useAppSelector(getProductTypeFilter);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const isChecked = event.target.checked;

    dispatch(setFilterValue({ id, isChecked }));
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