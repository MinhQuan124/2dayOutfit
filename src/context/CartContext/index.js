import { createContext, useContext, useEffect, useState } from "react";
import { getCartByUserId } from "../../services/apis/cartService";
import { useAuth } from "../AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const userId = user?.id;

  const [cart, setCart] = useState({ items: [] });

  const fetchCart = async (userId, setCart) => {
    if (!userId) return;
    try {
      const cartData = await getCartByUserId(userId);
      setCart(cartData);

      const totalQuantity = cartData.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = cartData.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      localStorage.setItem("cartTotalQuantity", totalQuantity);
      localStorage.setItem("cartTotalPrice", totalPrice);
    } catch (error) {
      console.error("Get cart failed", error);
    }
  };

  useEffect(() => {
    fetchCart(userId, setCart);
  }, [userId]);

  return (
    <CartContext.Provider value={{ cart, setCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
