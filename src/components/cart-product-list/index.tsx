import { Block } from "./cart-product-list.styled";
import CartProductCard from "../cart-product-card";
import { ICartItem } from "../../types/cart-item";

interface CartProductListProps {
  cartItems: ICartItem[];
}

function CartProductList({ cartItems }: CartProductListProps) {
  return (
    <Block>
      {cartItems.map((cartItem) => (
        <CartProductCard cartItem={cartItem} key={cartItem.product.barcode} />
      ))}
    </Block>
  );
}

export default CartProductList;