import { IProduct } from "../../types/product";

export const getProductByBarcode = (products: IProduct[], targetBarcode: number) => {
  return products.find(({ barcode }) => barcode === targetBarcode);
}