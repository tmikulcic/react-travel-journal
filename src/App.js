import data from './components/data';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className='main-container'>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
