import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default ShoppingCart;
