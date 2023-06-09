import { Fieldset, Legend, ShowAllButton, Wrapper } from "./checkbox-set.styled";
import { FilterBy, FilterLocation, ICheckboxFilter } from "../../types/filters";
import Input, { InputView } from "../input";

import Checkbox from "../checkbox";
import { useState } from "react";

interface CheckboxSetProps {
  filterName: string;
  items: ICheckboxFilter;
  filterField: FilterBy;
  shownItemsCount?: number;
  location?: FilterLocation;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxSet({filterName, items, filterField, shownItemsCount, location, onInputChange}: CheckboxSetProps) {
  const [isShownAll, setIsShownAll] = useState(false);
  const shownItems = !isShownAll && shownItemsCount ? Object.values(items).slice(0, shownItemsCount) : items;

  return (
    <Fieldset id={filterField}>
      <Legend>{filterName}</Legend>
      <Input $view={InputView.Search} />
      <Wrapper>
        {Object.values(shownItems).map(({title, id, isChecked}) => (
          <Checkbox 
            title={title} 
            id={id} 
            isChecked={isChecked} 
            filterField={filterField}
            location={location}
            onInputChange={onInputChange}
          />
        ))}
      </Wrapper>
      {shownItemsCount && Object.values(items).length > shownItemsCount &&
        <ShowAllButton type="button" onClick={() => setIsShownAll(!isShownAll)}>{isShownAll ? "Скрыть" : "Показать все"}</ShowAllButton>
      }
    </Fieldset>
  );
}

export default CheckboxSet;