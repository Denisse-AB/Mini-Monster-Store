import { useContext } from "react";
import { CartContext } from "../context/cart-context/cart-context";
import { CartItem } from "../context/cart-context/cart-types";
import SubTotalCard from "../components/subtotal-card/subtotal-card";
import SubTotalItem from "../components/subtotal-item/subtotal-item";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="container mx-auto mt-10">
        <SubTotalCard title="Checkout" buttonLabel="Pay" />
      </div>
      <div>
        { cartItems.length ?
          cartItems.map((monster: CartItem) => <SubTotalItem key={monster.id} monster={monster} />)
          : <span className='flex justify-center items-center text-3xl font-bold'>Your Cart Is Empty</span>
        }
      </div>
    </div>
  )
}

export default Checkout;