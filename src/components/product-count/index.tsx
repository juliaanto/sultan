import { Block, Button, Count } from "./product-count.styled";
import { addProduct, removeOneItem } from "../../store/products/productsSlice";

import { useAppDispatch } from "../../app/hooks";

interface ProductCountProps {
  count: number;
  barcode: number;
}

function ProductCount({count, barcode}: ProductCountProps) {
  const dispatch = useAppDispatch();

  return (
    <Block>
      <Button onClick={() => dispatch(removeOneItem(barcode))}>-</Button>
      <Count>{count}</Count>
      <Button onClick={() => dispatch(addProduct(barcode))}>+</Button>
    </Block>
  );
}

export default ProductCount;