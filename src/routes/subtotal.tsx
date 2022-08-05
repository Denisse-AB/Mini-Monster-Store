import { useContext } from "react";
import { CartContext } from "../context/cart-context/cart-context";
import { CartItem } from "../context/cart-context/cart-types";
import SubTotalCard from "../components/subtotal-card/subtotal-card";
import Button from "../components/button/button";

const SubTotal = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  // TODO: SUBTOTAL CARD
  return (
    <div className="container mx-auto mt-10">
      <div className="relative w-96 float-right rounded-lg border shadow-sm hover:bg-gray-100">
        <div className="m-5">
          <h5 className="mb-2 pb-3 border-b border-gray-300 text-center text-2xl font-bold tracking-tight text-gray-900">Sub Total</h5>
          Subtotal: ${cartTotal}
          <Button class='w-full' label="Checkout" />
        </div>
      </div>
      <div>
        { cartItems.length ?
          cartItems.map((monster: CartItem) => <SubTotalCard key={monster.id} monster={monster} />)
          : <span className='empty'>Your Cart Is Empty</span>
        }
      </div>
    </div>
  )
}

export default SubTotal;