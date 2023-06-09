import { Block, CheckboxInput, CheckboxLabel, Span } from "./checkbox.styled";
import { FilterBy, FilterLocation } from "../../types/filters";

import { getCatalogInitialProducts } from "../../store/products/productsSlice";
import { getFilterItemsCount } from "../../common/helpers/filter";
import { useAppSelector } from "../../app/hooks";

interface CheckboxProps {
  title: string;
  id: string;
  isChecked: boolean;
  filterField?: FilterBy;
  location?: FilterLocation;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({title, id, isChecked, filterField, location, onInputChange}: CheckboxProps) {
  const products = useAppSelector(getCatalogInitialProducts);
  
  return (
    <Block>
    <CheckboxInput 
      type="checkbox"
      id={location ? `${location as unknown as string}-${id}` : id}
      name={id}
      checked={isChecked}
      onChange={onInputChange}
    />
    <CheckboxLabel htmlFor={location ? `${location as unknown as string}-${id}` : id}>
      {title}
      {filterField && getFilterItemsCount(products, title, filterField) > 0 &&
        <Span>({getFilterItemsCount(products, title, filterField)})</Span>
      }
    </CheckboxLabel>
  </Block>
  );
}

export default Checkbox;