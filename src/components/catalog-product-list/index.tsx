import { Block } from "./product-list.styled";
import CatalogProductCard from "../catalog-product-card";
import { IProduct } from "../../types/product";

interface CatalogProductListProps {
  products: IProduct[];
}

function CatalogProductList({products}: CatalogProductListProps) {
  return (
    <Block>
      {products.map((product) => (
        <CatalogProductCard product={product} key={product.barcode} />
      ))}
    </Block>
  );
}

export default CatalogProductList;