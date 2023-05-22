import { Block, Icon, Label, Option, SelectWrapper, StyledSelect } from "./select.styled";

interface SelectProps {
  label: string;
  id: string;
  placeholder: string;
  options: {
    valueId: string;
    valueName: string
  }[]
}

function Select({label, id, options, placeholder}: SelectProps) {
  return (
    <Block>
      <Label htmlFor={id}>{label}</Label>
      <SelectWrapper>
        <StyledSelect id={id} name={id} required>
          <Option value="" selected hidden>{placeholder}</Option>
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