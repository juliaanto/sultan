import { Block, Button, Count } from "./product-count.styled";

interface ProductCountProps {
  count: number;
  disabled?: boolean;
  onRemoveButtonClick: () => void;
  onAddButtonClick: () => void;
}

function ProductCount({count, disabled, onRemoveButtonClick, onAddButtonClick}: ProductCountProps) {
  return (
    <Block>
      <Button onClick={onRemoveButtonClick} disabled={disabled}>-</Button>
      <Count>{count}</Count>
      <Button onClick={onAddButtonClick}>+</Button>
    </Block>
  );
}

export default ProductCount;