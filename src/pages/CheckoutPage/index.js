import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { CashIcon, QRIcon } from "../../components/Icons";
import { useAuth } from "../../context/AuthContext";
import { useCartContext } from "../../context/CartContext";
import Toast from "../../components/Toast";
import { toast } from "../../components/Toast";
import { createOrder } from "../../services/apis/orderService";
import { markOrderedItem } from "../../services/apis/cartService";

function CheckoutPage() {
  const [payment, setPayment] = useState("Place Order");
  const [paymentOrder, setPaymentOrder] = useState(1);

  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleOnChangeFullname = (e) => {
    setFullname(e.target.value);
  };
  const handleOnChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleOnChangePayment = (option, order) => {
    setPayment(option);
    setPaymentOrder(order);
  };

  const { user } = useAuth();
  const userId = user?.id;

  const { cart, fetchCart, setCart } = useCartContext();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cart]);

  //Get shipping day
  function getShipDate() {
    const today = new Date();
    const startDay = new Date(today);
    const endDay = new Date(today);

    startDay.setDate(today.getDate() + 4);
    endDay.setDate(today.getDate() + 6);

    const options = { weekday: "short", month: "short", day: "numeric" };

    const formattedStart = startDay.toLocaleDateString("en-US", options);
    const formattedEnd = endDay.toLocaleDateString("en-US", options);

    return `${formattedStart} - ${formattedEnd}`;
  }

  const handlePlaceOrder = async () => {
    //Check if user login
    if (!userId) {
      window.location.href = "/auth/login";
      return;
    }

    //Check input
    if (!fullname || !address) {
      toast.warning("Please input your fullname and address");
      return;
    }

    if (!phone) {
      toast.warning("Please input your phone number");
      return;
    }

    if (fullname.trim().length < 2) {
      toast.warning("Please enter a valid name");
      return;
    }

    if (!/^\d{10,}$/.test(phone)) {
      toast.warning("Please enter a valid phone number");
      return;
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderData = {
      userId,
      fullname,
      deliveryAddress: address,
      phone,
      items: cart.items.map((item) => ({
        productId: item.productId,
        price: item.price,
        size: item.size,
        color: item.color,
        image: item.image,
        quantity: item.quantity,
      })),
      totalAmount,
      paymentMethod: paymentOrder === 1 ? "COD" : "QR",
      shippingDateRange: getShipDate(),
    };

    const cartData = {
      items: cart.items.map((item) => ({
        ...item,
        productId: item.productId,
        ordered: true,
      })),
    };

    try {
      await createOrder(orderData);
      toast.success("Place Order Successful");

      await markOrderedItem(userId, cartData);

      fetchCart(userId, setCart);
      navigate("/orders");
    } catch (error) {
      toast.error("Place Order Failed");
      console.error("Order failed", error);
    }
  };

  return (
    <div className="p-4 lg:p-8">
      <Toast />
      <div className="flex flex-col lg:flex-row lg:w-[80%] mx-auto gap-28">
        {/* Delivery part */}
        <div className="flex-1 lg:basis-2/4 lg:w-[1100px]">
          <h3 className="font-semibold">Delivery</h3>

          {/* Name and address part */}
          <div className="my-5">
            <h3 className="text-lg">Enter your name and address</h3>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              className="ct-input"
              value={fullname}
              onChange={handleOnChangeFullname}
            />

            <input
              type="text"
              name="address"
              placeholder="House Number, Street Name,..."
              className="ct-input"
              value={address}
              onChange={handleOnChangeAddress}
            />
          </div>

          {/* Contact part */}
          <div className="my-5">
            <h3 className="text-lg">What's your contact information?</h3>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="ct-input mb-0"
              value={phone}
              onChange={handleOnChangePhone}
            />
            <p className="text-xs p-2 text-red-700">
              A shipper need it to contact to you
            </p>
          </div>

          {/* devider */}
          <div className="w-full border border-[#e5e5e5] my-10"></div>

          {/* Shipping part */}
          <div className="my-5">
            <h3 className="font-semibold">Shipping</h3>
            <div className="my-5 text-lg text-gray-400">
              <p>Your shipping is free</p>
              <p>Arrives {getShipDate()}</p>
            </div>
          </div>

          {/* devider */}
          <div className="w-full border border-[#e5e5e5] my-10"></div>

          <div>
            <h3 className="font-semibold">Payment</h3>
            <h3 className="my-4">How would you like to pay?</h3>

            <div>
              <button
                onClick={() => handleOnChangePayment("Place Order", 1)}
                className={`flex items-center w-[70%] text-lg rounded-xl p-5 my-4 border-2 focus:border-black ${
                  paymentOrder === 1 ? "border-black" : "border-gray-300"
                } `}
              >
                <CashIcon /> <span className="ml-3">Cash On Delivery</span>
              </button>

              <button
                disabled
                onClick={() => handleOnChangePayment("Pay with QR code", 2)}
                className={`opacity-40 flex items-center w-[70%] text-lg rounded-xl p-5 my-4 border-2 focus:border-black ${
                  paymentOrder === 2 ? "border-black" : "border-gray-300"
                }  `}
              >
                <QRIcon />
                <span className="ml-3">QR Payment</span>
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-400 my-5">
            By clicking {payment}, you agree to the 2DAYOUTFIT{" "}
            <Link to="#" className="underline">
              Terms and Conditions
            </Link>{" "}
          </p>

          {paymentOrder === 1 ? (
            <button
              onClick={handlePlaceOrder}
              className="flex items-center justify-center w-full bg-black text-white text-lg rounded-lg hover:bg-gray-800 py-3 my-5"
            >
              {payment}
            </button>
          ) : (
            <button
              onClick={handlePlaceOrder}
              className="flex items-center justify-center w-full bg-yellow-400 text-black text-lg rounded-lg hover:bg-yellow-500 py-3 my-5"
            >
              <QRIcon />
              <span className="ml-2">{payment}</span>
            </button>
          )}
        </div>

        {/* Order summary part */}
        <div className="flex-1 lg:basis-1/4">
          <h3 className="font-semibold">Order summary</h3>

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

          {/* Estimate ship day */}
          <p className="my-3 text-lg">Arrives {getShipDate()}</p>
          {/* cart items */}
          <div className="my-10">
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
                    <span>
                      <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.productId.name}
                          className="w-full h-full rounded-md object-cover"
                        />
                      </div>
                    </span>

                    <div className="w-full flex justify-between ml-2 sm:mx-4 gap-2 sm:gap-10">
                      {/* product info */}
                      <div className="">
                        <span>
                          <p className="text-base font-semibold line-clamp-1">
                            {item.productId.name}
                          </p>
                        </span>
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
                </div>
              ))
            ) : (
              <p className="text-center mt-10">...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
