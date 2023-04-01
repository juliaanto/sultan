import { CheckboxInput, CheckboxLabel, CheckboxWrapper, Fieldset, Legend, ShowAllButton, Span, Wrapper } from "./checkbox-set.styled";
import Input, { InputView } from "../input";

import { ICheckboxFilter } from "../../types/filters";
import { useState } from "react";

interface CheckboxProps {
  filterName: string;
  items: ICheckboxFilter;
  shownItemsCount?: number;
  id?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxSet({filterName, items, id, shownItemsCount, onInputChange}: CheckboxProps) {
  const [isShownAll, setIsShownAll] = useState(false);
  const shownItems = !isShownAll && shownItemsCount ? Object.values(items).slice(0, shownItemsCount) : items;
  
  return (
    <Fieldset id={id}>
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
              <Span>(56)</Span>
            </CheckboxLabel>
          </CheckboxWrapper>
        ))}
      </Wrapper>
      {shownItemsCount &&
        <ShowAllButton type="button" onClick={() => setIsShownAll(!isShownAll)}>{isShownAll ? "Скрыть" : "Показать все"}</ShowAllButton>
      }
    </Fieldset>
  );
}

export default CheckboxSet;