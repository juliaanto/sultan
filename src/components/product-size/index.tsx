import { Block, Text } from "./product-size.styled";

import { ReactComponent as IconBottle } from "../../assets/icons/bottle.svg";
import { ReactComponent as IconBox } from "../../assets/icons/box.svg";
import { SizeType } from "../../common/data/size-type";

interface ProductSizeProps {
  sizeType: string;
  size: string;
}

function ProductSize({ sizeType, size }: ProductSizeProps) {
  return (
    <Block>
    {sizeType === SizeType.Volume ?
      <IconBottle />
      :
      <IconBox /> 
    }
    <Text>{size}</Text>
  </Block>
  );
}

export default ProductSize;