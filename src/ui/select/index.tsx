import { Block, Icon, Label, Option, SelectWrapper, StyledSelect } from "./select.styled";

interface SelectProps {
  label: string;
  id: string;
  options: {
    valueId: string;
    valueName: string
  }[]
}

function Select({label, id, options}: SelectProps) {
  return (
    <Block>
      <Label htmlFor={id}>{label}</Label>
      <SelectWrapper>
        <StyledSelect id={id} name={id}>
          {options.map((option) => (
            <Option value={option.valueId} key={option.valueId}>{option.valueName}</Option>
          ))}
        </StyledSelect>
        <Icon />
      </SelectWrapper>
    </Block>
  );
}

export default Select;