import { CheckboxInput, CheckboxLabel, CheckboxWrapper, Fieldset, Legend, ShowAllButton, Span, Wrapper } from "./checkbox.styled";
import Input, { InputView } from "../input";

import { IFilterData } from "../../types/filter-data";

interface CheckboxProps {
  filterName: string;
  items: IFilterData;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({filterName, items, onInputChange}: CheckboxProps) {
  return (
    <Fieldset>
      <Legend>{filterName}</Legend>
      <Input $view={InputView.search} />
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

export default Checkbox;