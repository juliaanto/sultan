import { Block, Label, StyledTextarea } from "./textarea.styled";

interface TextareaProps {
  label: string;
  id: string;
}

function Textarea({label, id}: TextareaProps) {
  return (
    <Block>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextarea id={id} name={id}></StyledTextarea>
    </Block>
  );
}

export default Textarea;