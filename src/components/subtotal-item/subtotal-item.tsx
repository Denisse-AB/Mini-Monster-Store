import { useContext } from "react";
import { CartContext } from "../../context/cart-context/cart-context";
import { Monster } from "../card-list/card-list";
import Button from "../button/button";

const SubTotalItem = ({monster}:Monster) => {
  const { name, imageUrl, price, quantity } = monster;
  const { removeItem } = useContext(CartContext);

  const removeItemFromCart = () => removeItem(monster);

  return (
    <div className="flex flex-col m-3 w-48 mobile:mx-auto tablet:w-96 items-center bg-white rounded-lg border shadow-sm md:flex-row tablet:max-w-lg hover:bg-gray-100">
      <img className="object-cover w-full h-60 rounded-t-lg tablet:h-auto tablet:w-48 tablet:rounded-none tablet:rounded-l-lg" src={imageUrl} alt={`monster ${name}`} />
      <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="mb-3 font-normal text-gray-700">{`Price: ${price}`}</p>
        <p>{`Qty: ${quantity}`}</p>
        <Button
          type="button"
          buttonType="ml-20 w-20 "
          onClick={removeItemFromCart}
        >Delete
        </Button>
      </div>
    </div>
  )
}

export default SubTotalItem;