import { Block, Label, StyledTextarea } from "./textarea.styled";

interface TextareaProps {
  label: string;
  id: string;
  placeholder?: string;
}

function Textarea({label, id, placeholder}: TextareaProps) {
  return (
    <Block>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextarea id={id} name={id} placeholder={placeholder}></StyledTextarea>
    </Block>
  );
}

export default Textarea;