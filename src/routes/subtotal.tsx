import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import CardList from "../components/card-list/card-list";
import { Item } from "../context/cart-types";

const SubTotal = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      { cartItems.length ?
        cartItems.map((monster: Item) => <CardList key={monster.id} monster={monster} />)
        : <span className='empty'>Your Cart Is Empty</span>
      }
    </div>
  )
}

export default SubTotal;