import { ICartItem } from "../../types/cart-item";
import { IProduct } from "../../types/product";

export const getProductByBarcode = (products: IProduct[], targetBarcode: number) => {
  return products.find(({ barcode }) => barcode === targetBarcode);
}

export const getProductCountInCart = (cartItems: ICartItem[], targetBarcode: number) => {
  return cartItems.find(({ product }) => product.barcode === targetBarcode)?.count;
}

export const addProductToCart = (cartItems: ICartItem[], targetBarcode: number, catalogProducts: IProduct[]) => {
  const cartItem = cartItems.find(({ product }) => product.barcode === targetBarcode);

  if (cartItem) {
    cartItem.count++;
  } else {
    const addedProduct: IProduct | undefined = getProductByBarcode(catalogProducts, targetBarcode);
    addedProduct && cartItems.push({
        product: addedProduct,
        count: 1,
      })
  }
}

export const removeItemFromCart = (cartItems: ICartItem[], targetBarcode: number) => {
  const cartItem = cartItems.find(({ product }) => product.barcode === targetBarcode);

  if (!cartItem) {
    return;
  }
  
  const cartItemCount = cartItem.count;

  if (cartItemCount > 1) {
    cartItem.count--;
  } else {
    const index = cartItems.indexOf(cartItem);
    cartItems.splice(index, 1);
  }
}

export const getCartItemsTotalCount = (cartItems: ICartItem[]) => {
  let itemsTotalCount = 0;
  cartItems.forEach((item) => itemsTotalCount += item.count);
  return itemsTotalCount;
}

export const getCartTotalPrice = (cartItems: ICartItem[]) => {
  let cartTotalPrice = 0;
  cartItems.forEach((item) => cartTotalPrice += item.product.price * item.count);
  return cartTotalPrice;
}
