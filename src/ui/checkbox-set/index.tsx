import { CheckboxInput, CheckboxLabel, CheckboxWrapper, Fieldset, Legend, ShowAllButton, Span, Wrapper } from "./checkbox-set.styled";
import { FilterBy, ICheckboxFilter } from "../../types/filters";
import Input, { InputView } from "../input";

import { getCatalogInitialProducts } from "../../store/products/productsSlice";
import { getFilterItemsCount } from "../../common/helpers/filter";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";

interface CheckboxProps {
  filterName: string;
  items: ICheckboxFilter;
  filterField: FilterBy;
  shownItemsCount?: number;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxSet({filterName, items, filterField, shownItemsCount, onInputChange}: CheckboxProps) {
  const products = useAppSelector(getCatalogInitialProducts);
  const [isShownAll, setIsShownAll] = useState(false);
  const shownItems = !isShownAll && shownItemsCount ? Object.values(items).slice(0, shownItemsCount) : items;

  return (
    <Fieldset id={filterField}>
      <Legend>{filterName}</Legend>
      <Input $view={InputView.Search} />
      <Wrapper>
        {Object.values(shownItems).map(({title, id, isChecked}) => (
          <CheckboxWrapper key={id}>
            {onInputChange ?
              <CheckboxInput type="checkbox" id={"sideFilter-" + id} name={id} checked={isChecked} onChange={onInputChange} />
              :
              <CheckboxInput type="checkbox" id={"sideFilter-" + id} name={id} />
            }
            <CheckboxLabel htmlFor={"sideFilter-" + id}>
              {title}
              {getFilterItemsCount(products, title, filterField) > 0 &&
                <Span>({getFilterItemsCount(products, title, filterField)})</Span>
              }
            </CheckboxLabel>
          </CheckboxWrapper>
        ))}
      </Wrapper>
      {shownItemsCount && Object.values(items).length > shownItemsCount &&
        <ShowAllButton type="button" onClick={() => setIsShownAll(!isShownAll)}>{isShownAll ? "Скрыть" : "Показать все"}</ShowAllButton>
      }
    </Fieldset>
  );
}

export default CheckboxSet;