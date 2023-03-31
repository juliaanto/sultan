import { Block, Button, Count } from "./product-count.styled";

import { addProduct } from "../../store/products/productsSlice";
import { useAppDispatch } from "../../app/hooks";

interface ProductCountProps {
  count: number;
  barcode: number;
}

function ProductCount({count, barcode}: ProductCountProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(barcode));
  }
  
  return (
    <Block>
      <Button>-</Button>
      <Count>{count}</Count>
      <Button onClick={handleAddToCart}>+</Button>
    </Block>
  );
}

export default ProductCount;