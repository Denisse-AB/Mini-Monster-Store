type Monster = {
    monster: {
      name: string;
      imageUrl: string;
      price: number;
    }
}

const CardList = ({ monster }:Monster) => {
  const { name, imageUrl, price } = monster;

  return (
    // TODO: SET ROUTER, context AND ADDITIONAL PAGES
    <div className='border border-black h-72'>
      <div
        className='w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="flex">
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardList;