import { useContext } from 'react';
import { CartContext } from '../../context/cart-context/cart-context';

export type Monster = {
  monster: {
    name: string,
    imageUrl: string,
    price: number,
    quantity: number
  }
}

const HomeCardList = ({ monster }:Monster) => {
  const { name, imageUrl, price } = monster;
  const { addItemToCart } = useContext(CartContext);

  const insertItemToCart = () => addItemToCart(monster);

  return (
    <div
      className='mt-5 w-36 border-card-bg bg-card-bg
      rounded-sm shadow-sm h-72 tablet:hover:ease-out
      tablet:duration-150 tablet:hover:scale-105 tablet:mt-0
      laptop:w-52 laptop:h-72'
      onClick={insertItemToCart}
      data-testid="test-insert-item"
    >
      <div
        className='w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <h2
          className='text-white text-center text-xl
          font-henny-penny tracking-wide mt-1'
        >
          {name}
        </h2>
      </div>
      <div>
        <p
          className='text-white font-bold bg-price-bg w-fit
          rounded-sm px-1 text-2xl -mt-8'
        >
          ${price}
        </p>
      </div>
    </div>
  )
}

export default HomeCardList;