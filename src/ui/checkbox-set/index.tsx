import { CheckboxInput, CheckboxLabel, CheckboxWrapper, Fieldset, Legend, ShowAllButton, Span, Wrapper } from "./checkbox-set.styled";
import Input, { InputView } from "../input";

import { ICheckboxFilter } from "../../types/filters";

interface CheckboxProps {
  filterName: string;
  items: ICheckboxFilter;
  id?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxSet({filterName, items, id, onInputChange}: CheckboxProps) {
  return (
    <Fieldset id={id}>
      <Legend>{filterName}</Legend>
      <Input $view={InputView.Search} />
      <Wrapper>
        {Object.values(items).map(({title, id, isChecked}) => (
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
      <ShowAllButton type="button">Показать все</ShowAllButton>
    </Fieldset>
  );
}

export default CheckboxSet;