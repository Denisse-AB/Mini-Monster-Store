import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context/cart-context";

const ThankYou = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems.length) {
      navigate('/')
    }
    clearCart()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container px-2 mx-auto laptop:px-40">
      <div className="mx-auto m-5 mt-12 p-4 text-xl text-gray-700 border-l-4 border border-green-400 bg-green-100" role="alert">
        <svg className="inline-flex mr-2 mb-1 w-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
        Thank you! your purchase has been accepted successfully.
      </div>
    </div>
  )
}
export default ThankYou;