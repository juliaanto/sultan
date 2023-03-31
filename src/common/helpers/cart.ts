import { ICartItem } from "../../types/cart-item";
import { IProduct } from "../../types/product";

export const getProductByBarcode = (products: IProduct[], targetBarcode: number) => {
  return products.find(({ barcode }) => barcode === targetBarcode);
}

export const getProductCountInCart = (cartItems: ICartItem[], targetBarcode: number) => {
  return cartItems.find(({ product }) => product.barcode === targetBarcode)?.count;
}
