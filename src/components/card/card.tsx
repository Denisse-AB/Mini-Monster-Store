import CardList from '../../components/card-list/card-list';
import monsters from '../../utils/product-data/product-data';

const Card = () => {
  return (
    <div>
      <div className='min-h-screen flex flex-col items-center justify-center cursor-pointer'>
        <div className="grid grid-cols-2 gap-3 tablet:grid-cols-4 tablet:gap-4">
          {
            monsters.map((monster) => (
              <CardList key={monster.id} monster={monster} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Card;