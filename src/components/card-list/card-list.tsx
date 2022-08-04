import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

type Monster = {
  monster: {
    name: string;
    imageUrl: string;
    price: number;
  }
}

const CardList = ({ monster }:Monster) => {
  const { name, imageUrl, price } = monster;
  const { addItemToCart } = useContext(CartContext);

  // TODO: BRING COUNTER AND BUILD BUTTON NAV
  const insertItemToCart = () => addItemToCart(monster);

  return (
    <div
      // className='w-52 border border-black h-72'
      // width: 35%; height: 8rem
      // className='w-1/4 h-60 border border-black'
      className='w-52 border border-black h-72'
      onClick={insertItemToCart}>
      <div
        // className='w-60 bg-cover bg: width: fit-content; width: 35%;'
        // instead of bg-cover use .bg-cover {background-size: cover;width: fit-content;}
        className='w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* className="flex text-black text-right" */}
        <div className="flex text-black">
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardList;