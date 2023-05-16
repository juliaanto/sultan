import { TableData, TableRow } from "./admin-product-card.styled";

import { IProduct } from "../../types/product";

interface AdminProductCardProps {
  product: IProduct;
}

function AdminProductCard({product}: AdminProductCardProps) {
  return (
    <TableRow>
      <TableData>{product.barcode}</TableData>
      <TableData>
        <img src={product.imageUrl} alt={product.title} width={100} height={100} />
      </TableData>
      <TableData>{product.title}</TableData>
      <TableData>{product.price}</TableData>
      <TableData>{product.brand}</TableData>
      <TableData>{product.producer}</TableData>
      <TableData>{product.sizeType}</TableData>
      <TableData>{product.size}</TableData>
      <TableData>{product.productType}</TableData>
      <TableData>{product.description.substring(0, 200)}</TableData>
    </TableRow>
  )
}

export default AdminProductCard;