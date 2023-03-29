import { Block } from "./product-list.styled";
import { IProduct } from "../../types/product";
import ProductCard from "../product-card";

interface ProductListProps {
  products: IProduct[];
}

function ProductList({products}: ProductListProps) {
  return (
    <Block>
      {products.map((product) => (
        <ProductCard product={product} key={product.barcode} />
      ))}
    </Block>
  );
}

export default ProductList;