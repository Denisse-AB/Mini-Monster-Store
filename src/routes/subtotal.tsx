import { useContext } from "react";
import { CartContext } from "../context/cart-context/cart-context";
import { CartItem } from "../context/cart-context/cart-types";
import SubTotalItem from "../components/subtotal-item/subtotal-item";
import SubTotalCard from "../components/subtotal-card/subtotal-card";

const SubTotal = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div data-testid="test-subtotal-route">
      <div className="container mx-auto mt-10">
        <SubTotalCard />
      </div>
      <div className={(cartItems.length === 1 ? "" : "mobile:grid grid-cols-2 ") + "tablet:grid-cols-none"}>
        { cartItems.length ?
          cartItems.map((monster: CartItem) => <SubTotalItem key={monster.id} monster={monster} />)
          : <span className='flex justify-center items-center text-3xl font-bold'>Your Cart Is Empty</span>
        }
      </div>
    </div>
  )
}

export default SubTotal;