import { useState } from 'react';
import ButtonCategory from './components/ButtonCategory';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  const [category, setCategory] = useState('');
  return (
    <header className="App">
      <Header />
      <ButtonCategory setValue={setCategory} />
      <ProductsList category={category} />
    </header>
  );
}

export default App;
