import { IProduct } from "../../types/product";

export const findProductByBarcode = (products: IProduct[], targetBarcode: number) => {
  return products.find(({ barcode }) => barcode === targetBarcode);
}