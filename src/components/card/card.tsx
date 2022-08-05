import CardList from '../../components/card-list/card-list';
import monsters from '../../utils/product-data/product-data';

const Card = () => {
  return (
    <div>
      {/* <h1 className='text-center mt-16'>monsters</h1> */}
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className="grid grid-cols-4 gap-4">
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