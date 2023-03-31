import { Block, Button, Count } from "./product-count.styled";

interface ProductCountProps {
  count: number;
}

function ProductCount({count}: ProductCountProps) {
  return (
    <Block>
      <Button>-</Button>
      <Count>{count}</Count>
      <Button>+</Button>
    </Block>
  );
}

export default ProductCount;