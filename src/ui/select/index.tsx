import { Block, Icon, Label, Option, SelectWrapper, StyledSelect } from "./select.styled";

interface SelectProps {
  label: string;
  id: string;
  placeholder: string;
  options: string[];
}

function Select({label, id, options, placeholder}: SelectProps) {
  return (
    <Block>
      <Label htmlFor={id}>{label}</Label>
      <SelectWrapper>
        <StyledSelect id={id} name={id} required>
          <Option value="" hidden>{placeholder}</Option>
          {options.map((option) => (
            <Option value={option} key={option}>{option}</Option>
          ))}
        </StyledSelect>
        <Icon />
      </SelectWrapper>
    </Block>
  );
}

export default Select;