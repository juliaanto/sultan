import { Block, Input, Label, Wrapper } from "./top-filter.styled";

interface TopFilterProps {
  items: (string | number)[];
}

function TopFilter({items}: TopFilterProps) {
  return(
    <Block>
      {Object.entries(items).map(([key, value]) => (
        <Wrapper key={key}>
          <Input type="checkbox" id={key} name={key} />
          <Label htmlFor={key}>{value}</Label>
        </Wrapper>
      ))}
    </Block>
  );
}

export default TopFilter;