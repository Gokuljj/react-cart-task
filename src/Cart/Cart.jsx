import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMinus , FaPlus, FaLongArrowAltLeft } from "react-icons/fa";


function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(0);

  const carts = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
    const discount = total * 0.1; // 10% discount
    setDiscountedTotal(total - discount);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity - 1);
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (carts.length === 0) {
    return <h1 className="h-[55vh] flex justify-center items-center text-4xl">Cart is Empty</h1>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full shadow-md my-10 flex-wrap">
        <div className="bg-white px-10 py-1">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-purple-900 text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-purple-900 text-2xl">{carts.length} Items</h2>
          </div>
          <div className="flex flex-wrap mt-10 mb-5">
            <h3 className="font-semibold text-purple-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-purple-600 text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center text-purple-600 text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-center text-purple-600 text-xs uppercase w-1/5">Total</h3>
          </div>
          {carts?.map((cart) => {
            return (
              <div className="flex items-center hover:bg-purple-100 -mx-8 px-6 py-5" key={cart.id}>
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={cart?.image} alt={cart?.title} />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-purple-900 text-sm">{cart?.title}</span>
                    <span className="text-red-500 text-xs capitalize">{cart?.category}</span>
                    <div
                      className="font-semibold hover:text-red-500 text-purple-500 text-xs cursor-pointer"
                      onClick={() => removeProduct(cart?.id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-1/5">
                  <FaMinus
                    className="fill-current text-purple-600 w-3 cursor-pointer"
                    onClick={() => handleDec(cart?.id)} 
                  />

                  <input
                    className="mx-2 border text-center w-8 text-purple-900"
                    type="text"
                    value={cart?.quantity}
                    readOnly
                  />
                  <FaPlus
                    className="fill-current text-purple-600 w-3 cursor-pointer"
                    onClick={() => handleInc(cart?.id)}
                  />
                </div>
                <span className="text-center w-1/5 text-purple-900 font-semibold text-sm">₹{cart?.price}</span>
                <span className="text-center w-1/5 text-purple-900 font-semibold text-sm">
                ₹{(cart?.price * cart?.quantity).toFixed(2)}
                </span>
              </div>
            );
          })}

          <Link to={'/products'} className="flex font-semibold items-center  text-purple-900 text-sm mt-10">
            <FaLongArrowAltLeft className="fill-current mr-2 text-purple-900 w-4" />
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-2/4 px-8 py-10 container">
          <h1 className="font-semibold text-2xl text-purple-900 border-b pb-8">Order Summary</h1>
          <div className="flex flex-wrap justify-between mt-10">
            <span className="font-semibold text-purple-900 text-sm uppercase">Items {carts?.length}</span>
            <span className="font-semibold text-purple-900 text-sm">₹ {total?.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-5">
            <span className="font-semibold text-green-600 text-sm uppercase">10% Discount</span>
            <span className="font-semibold text-sm text-green-600">
              -₹ {(total * 0.1).toFixed(2)}
            </span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span className='text-purple-900'>Total cost</span>
              <span className='text-purple-900'>₹ {discountedTotal.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="bg-purple-500 font-semibold hover:bg-purple-600 rounded-md py-3 p-2 text-sm text-white uppercase w-full"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;



