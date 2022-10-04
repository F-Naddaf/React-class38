import { Outlet } from 'react-router-dom';
import ButtonCategory from './components/ButtonCategory';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <header className="App">
      <Header />
      <ButtonCategory />
      <ProductsList />
      <Outlet />
    </header>
  );
}

export default App;
