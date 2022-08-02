import CardList from './components/card-list/card-list';
import monsters from './utils/product-data/product-data';

const App = () => {
  return (
  <div className='mx-10 mt-40'>
    <div className="grid grid-cols-4 gap-4">
      {
        monsters.map((monster) => (
          <CardList key={monster.id} monster={monster} />
        ))
      }
    </div>
  </div>
  )
}

export default App;