import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { IMG_BASE_URL } from "../utils/constants";
import { addItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems_cart", cartItems);
  // const cartInfo = cartItems?.card
  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    // dispatch an action
    console.log("added_data", data);
    dispatch(addItem(data));
  };
  const handleClearCart = (data) => {
    // dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100 ">
      <div>
        <h1 className="font-bold text-xl text-center pb-6">Cart</h1>
        {cartItems?.length !== 0 && (
          <div className="flex items-center justify-center pb-4">
            <button
              className="px-2 py-2 bg-orange-400 text-white rounded-md"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}

        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
          {cartItems?.length > 0 ? (
            cartItems.map((item, index) => {
              console.log("item_cart", item.card.info);
              return (
                <div
                  key={index}
                  className="p-2 border-b border-gray-300 flex justify-between items-center pb-8 "
                >
                    <div className="flex justify-center items-center">

                  <p className="pr-4 w-[250]">{item.card.info.name}</p>
                  {/* <div>{item.card.info?.sla}</div> */}
                  <p className="font-normal text-sm">
                    ₹{" "}
                    {item?.card?.info?.defaultPrice / 100 ||
                      item?.card?.info?.price / 100}
                  </p>

                  <div>
                    {item?.card?.info?.imageId !== undefined ? (
                      <div className="relative justify-center items-end flex ml-4">
                        <div className="absolute bottom-[-12]">
                          <button
                            onClick={() => handleAddItem(item)}
                            className="h-8 w-[80] border bg-white border-r-2 text-green-600 font-bold rounded-md shadow-lg"
                          >
                            ADD
                          </button>
                        </div>
                        <img
                          alt="img-logo"
                          className=" h-24 w-28 rounded-lg "
                          src={IMG_BASE_URL + item?.card?.info?.imageId}
                        />
                      </div>
                    ) : (
                      <div className="relative justify-center items-end flex">
                        <div className="absolute  bottom-[-12]">
                          <button
                            onClick={() => handleAddItem(item)}
                            className="h-8 w-[80] border bg-white border-r-2 text-green-600 font-bold rounded-md shadow-lg"
                          >
                            ADD
                          </button>
                        </div>
                        <div className="h-28 w-28 rounded-lg bg-gray-200"></div>
                      </div>
                    )}
                  </div>
                  </div>

                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No items in the cart</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
