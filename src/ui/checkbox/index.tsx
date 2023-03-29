import { CheckboxInput, CheckboxLabel, CheckboxWrapper, Fieldset, Legend, ShowAllButton, Span, Wrapper } from "./checkbox.styled";
import Input, { InputView } from "../input";

interface CheckboxProps {
  filterName: string;
  filterCode: string;
  items: (string | number)[];
}

function Checkbox({filterName, filterCode, items}: CheckboxProps) {
  return (
    <Fieldset>
      <Legend>{filterName}</Legend>
      <Input $view={InputView.search} />
      <Wrapper>
        {items.map((item, index) => (
          <CheckboxWrapper key={filterCode + index}>
            <CheckboxInput type="checkbox" id={filterCode + index} name={filterCode + index} />
            <CheckboxLabel htmlFor={filterCode + index}>
              {item}
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