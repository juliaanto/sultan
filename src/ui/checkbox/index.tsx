import { Block, CheckboxInput, CheckboxLabel, Span } from "./checkbox.styled";

import { FilterBy } from "../../types/filters";
import { getCatalogInitialProducts } from "../../store/products/productsSlice";
import { getFilterItemsCount } from "../../common/helpers/filter";
import { useAppSelector } from "../../app/hooks";

interface CheckboxProps {
  title: string;
  id: string;
  isChecked: boolean;
  filterField?: FilterBy;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({title, id, isChecked, filterField, onInputChange}: CheckboxProps) {
  const products = useAppSelector(getCatalogInitialProducts);
  
  return (
    <Block>
    {onInputChange ?
      <CheckboxInput type="checkbox" id={"sideFilter-" + id} name={id} checked={isChecked} onChange={onInputChange} />
      :
      <CheckboxInput type="checkbox" id={"sideFilter-" + id} name={id} />
    }
    <CheckboxLabel htmlFor={"sideFilter-" + id}>
      {title}
      {filterField && getFilterItemsCount(products, title, filterField) > 0 &&
        <Span>({getFilterItemsCount(products, title, filterField)})</Span>
      }
    </CheckboxLabel>
  </Block>
  );
}

export default Checkbox;