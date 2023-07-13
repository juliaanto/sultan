import { Block, Label, StyledTextarea } from "./textarea.styled";

interface TextareaProps {
  label: string;
  id: string;
  placeholder?: string;
  defaultValue?: string;
}

function Textarea({label, id, placeholder, defaultValue}: TextareaProps) {
  return (
    <Block>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextarea id={id} name={id} placeholder={placeholder} defaultValue={defaultValue}></StyledTextarea>
    </Block>
  );
}

export default Textarea;