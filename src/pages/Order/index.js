import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { cancelOrder, getOrder } from "../../services/apis/orderService";
import Toast from "../../components/Toast";
import { toast } from "../../components/Toast";
import { useCartContext } from "../../context/CartContext";
import { markOrderedItem } from "../../services/apis/cartService";

function Order() {
  const { user } = useAuth();
  const userId = user.id;

  const { cart, fetchCart, setCart } = useCartContext();

  const [orders, setOrders] = useState(null);

  useEffect(() => {
    //Check if user logined
    if (!userId) {
      window.location.href = "/auth/login";
      return;
    }

    const fetchOrder = async () => {
      try {
        const data = await getOrder(userId);
        setOrders(data);
      } catch (error) {
        console.error("Get order failed", error);
      }
    };

    fetchOrder();
  }, [userId]);

  const cartData = {
    items: cart.items.map((item) => ({
      ...item,
      productId: item.productId,
      ordered: false,
    })),
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await cancelOrder(orderId);
      toast.success("Cancel order succesful");

      const data = await getOrder(userId);
      setOrders(data);

      const mark = await markOrderedItem(userId, cartData);
      console.log("mảk", mark);

      fetchCart(userId, setCart);
    } catch (error) {
      console.error("Cancel order failed", error);
      toast.error("Cancel order failed");
    }
  };
  return (
    <div className="p-4 lg:p-8">
      <Toast />
      <div className="lg:w-[80%] mx-auto">
        <h2 className="font-semibold">Your orders</h2>
        <div className="my-5">
          {!orders ? (
            <p className="text-center mt-10">...</p>
          ) : orders.length === 0 ? (
            <p className="text-center mt-10">You don't have any orders</p>
          ) : (
            orders.map((order, index) => (
              <div
                key={order._id}
                className="w-full border rounded-md p-2 lg:p-6 mb-10"
              >
                {/* Order header */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl lg:text-2xl">
                      Order #{index + 1}
                    </h3>
                    <p className="text-base text-gray-500">
                      You placed on{" "}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-xl lg:text-2xl">
                      Total: {order.totalAmount}$
                    </h3>
                    <p className="text-base text-gray-500">
                      Status: {order.status}
                    </p>
                  </div>
                </div>

                {/* Ordered items */}
                <div className="space-y-6 my-5">
                  {order.items.map((item) => (
                    <div key={item._id} className="flex">
                      {/* Product img */}
                      <div className="flex-shrink-0 w-32 h-32 lg:w-36 lg:h-36 rounded-md border overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.productId.name}
                          className="w-full h-full rounded-md object-cover"
                        />
                      </div>

                      {/* product info */}
                      <div className="ml-4">
                        <h3 className="text-lg lg:text-xl line-clamp-1">
                          {item.productId.name}
                        </h3>
                        <p className="text-sm lg:text-base font-medium text-[#707072]">
                          Men's {item.productId.category}
                        </p>
                        <p className="text-sm lg:text-base font-medium text-[#707072]">
                          Color: {item.color}
                        </p>
                        <p className="text-sm lg:text-base font-medium text-[#707072]">
                          Size: {item.size}
                        </p>
                        <p className="text-sm lg:text-base font-medium text-[#707072]">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm lg:text-base">{item.price}$</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* order footer */}
                <div className="border-t mt-5 pt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm">Arrives {order.shippingDateRange}</p>
                    <p className="text-sm">
                      Payment method: {order.paymentMethod}
                    </p>
                  </div>

                  {order.status === "Pending" ? (
                    <button
                      onClick={() => handleCancelOrder(order._id)}
                      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
                    >
                      Cancel order
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
