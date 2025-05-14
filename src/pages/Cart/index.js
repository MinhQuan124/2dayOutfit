import {
  updateCartItemQuantity,
  deleteCartItem,
  getCartByUserId,
} from "../../services/apis/cartService";
import { useAuth } from "../../context/AuthContext";
import {
  FavouriteIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "../../components/Icons";
import { toast } from "../../components/Toast";
import Toast from "../../components/Toast";
import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { user } = useAuth();
  const userId = user?.id;

  const { cart, setCart } = useCartContext();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cart]);

  const handleUpdateQuantity = async (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1 || newQuantity > 10) return;

    try {
      await updateCartItemQuantity(
        userId,
        item.productId._id,
        item.price,
        item.size,
        item.color,
        item.image,
        newQuantity
      );

      //re-render cart
      const updatedCart = await getCartByUserId(userId);
      setCart(updatedCart);
    } catch (error) {
      console.error("error", error);
      toast.error("Failed to update quantity");
    }
  };

  const handleDeleteCartItem = async (item) => {
    try {
      await deleteCartItem(
        userId,
        item.productId._id,
        item.color,
        item.size,
        item.image
      );

      //re-render cart
      const updatedCart = await getCartByUserId(userId);
      setCart(updatedCart);
    } catch (error) {
      toast.error("Remove item failed");
    }
  };

  return (
    <div>
      <Toast />
      {/* Free delivery badge */}
      <div className="flex items-center justify-center bg-black text-white h-9">
        <p className="text-sm font-semibold mr-8">FREE DELIVERY</p>
        <p className="text-sm">Applies to all orders.</p>
      </div>

      {/* Cart items */}
      <div className="p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:w-[80%] mx-auto gap-8">
          {/* Products part */}
          <div className="flex-1 lg:basis-2/3 lg:w-[1100px]">
            <h3 className="font-semibold text-center lg:text-left">Cart</h3>
            {!cart || cart.items.length === 0 ? (
              <p>There are no items in your cart</p>
            ) : cart?.items ? (
              cart.items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}-${item.color}-${item.image}`}
                  className="flex flex-col mt-5"
                >
                  <div className="flex flex-row">
                    {/* product image */}
                    <Link to={`/products/${item.productId.slug}`}>
                      <div className="w-36 h-36 lg:w-48 lg:h-48 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.productId.name}
                          className="w-full h-full rounded-md object-cover"
                        />
                      </div>
                    </Link>

                    <div className="w-full flex justify-between ml-2 sm:mx-4 gap-2 sm:gap-10">
                      {/* product info */}
                      <div className="">
                        <Link to={`/products/${item.productId.slug}`}>
                          <p className="text-base font-semibold line-clamp-1">
                            {item.productId.name}
                          </p>
                        </Link>
                        <p className="text-base font-medium text-[#707072]">
                          Men's {item.productId.category}
                        </p>
                        <p className="text-base font-medium text-[#707072]">
                          {item.color}
                        </p>
                        <p className="text-base font-medium text-[#707072]">
                          Size {item.size}
                        </p>
                      </div>
                      {/* Price */}
                      <p className="text-base font-semibold">{item.price}$</p>
                    </div>
                  </div>

                  {/* Update quantity, add to fav part */}
                  <div className="my-5 flex space-x-4">
                    <div className="flex items-center max-w-fit rounded-full border border-[#e5e5e5]">
                      {item.quantity === 1 ? (
                        <button
                          onClick={() => handleDeleteCartItem(item)}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200"
                        >
                          <TrashIcon />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUpdateQuantity(item, -1)}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200"
                        >
                          <MinusIcon />
                        </button>
                      )}
                      <span className="w-6 text-lg text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item, 1)}
                        disabled={item.quantity >= 10}
                        className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 ${
                          item.quantity >= 10 ? "opacity-30" : ""
                        }`}
                      >
                        <PlusIcon />
                      </button>
                    </div>

                    {/* Fav icon */}

                    <button className="border border-[#e5e5e5] rounded-full p-3 hover:bg-slate-200">
                      <FavouriteIcon size={"size-5"} />
                    </button>
                  </div>
                  {/* devider */}
                  <div className="w-full border border-[#e5e5e5] my-5"></div>
                </div>
              ))
            ) : (
              <p className="text-center mt-10">...</p>
            )}
          </div>

          {/* check out part */}
          <div className="flex-1 lg:basis-1/3">
            <h3 className="font-semibold">Summary</h3>
            <div className="flex justify-between mt-5">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">{totalPrice}$</p>
            </div>

            <div className="flex justify-between mt-1">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg">Free</p>
            </div>

            {/* devider */}
            <div className="w-full border border-[#e5e5e5] my-5"></div>

            <div className="flex justify-between">
              <p className="text-lg">Total</p>
              <p className="text-lg">{totalPrice}$</p>
            </div>

            {/* devider */}
            <div className="w-full border border-[#e5e5e5] my-3"></div>

            <Link to="/checkout" className="block">
              <button className="hidden lg:block w-full bg-black text-white text-lg rounded-full hover:bg-gray-800 py-3 mt-5">
                Member Checkout
              </button>
            </Link>

            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#beb7b7] p-4 shadow-md lg:hidden z-50">
              <Link to="/checkout" className="block">
                <button className="w-full bg-black text-white text-lg rounded-full hover:bg-gray-800 py-3">
                  Member Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
