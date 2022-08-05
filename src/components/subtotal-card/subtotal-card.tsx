import Button from "../button/button";
import { Monster } from "../card-list/card-list";

const SubTotalCard = ({monster}:Monster) => {
  const { name, imageUrl, price, quantity } = monster;

  return (
    <div className="flex flex-col w-96 items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-lg hover:bg-gray-100">
      <img className="object-cover w-full h-60 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imageUrl} alt={`monster ${name}`} />
      <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="mb-3 font-normal text-gray-700">{`Price: ${price}`}</p>
        <p>{`Qty: ${quantity}`}</p>
        <Button class="ml-20 w-20 " label="Delete" />
        {/* <button className="ml-20 border border-black w-20 mt-5 rounded-full">Delete</button> */}
      </div>
    </div>
  )
}

export default SubTotalCard;