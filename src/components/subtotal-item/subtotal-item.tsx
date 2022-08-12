import { useContext } from "react";
import { CartContext } from "../../context/cart-context/cart-context";
import { Monster } from "../home-card-list/home-card-list";
import Button from "../button/button";

const SubTotalItem = ({monster}:Monster) => {
  const { name, imageUrl, price, quantity } = monster;
  const { removeItem } = useContext(CartContext);

  const removeItemFromCart = () => removeItem(monster);

  return (
    <div className="flex flex-col m-3 tablet:w-96 items-center bg-white rounded-lg border shadow-sm tablet:flex-row tablet:max-w-lg laptop:mx-20">
      <img className="object-cover w-full h-60 rounded-t-lg tablet:h-auto tablet:w-48 tablet:rounded-none tablet:rounded-l-lg" src={imageUrl} alt={`monster ${name}`} />
      <div className="flex flex-col w-full justify-between leading-normal">
        <h5 className="mb-2 mx-1 text-2xl font-bold text-gray-900 font-henny-penny tracking-wide mt-1">{name}</h5>
        <p className="mb-3 mx-1 font-normal text-gray-700">{`Price: $${price}`}</p>
        <p className="mx-1">{`Qty: ${quantity}`}</p>
        <Button
          isLoading={false}
          type="button"
          buttonClass="mx-1 mb-2 w-20 "
          onClick={removeItemFromCart}
        >Delete
        </Button>
      </div>
    </div>
  )
}

export default SubTotalItem;