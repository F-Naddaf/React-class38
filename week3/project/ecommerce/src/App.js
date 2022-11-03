import { Outlet } from 'react-router-dom';
import ButtonCategory from './components/ButtonCategory';
import Header from './components/Header';
import ProductCategory from './components/ProductCategory';

function App() {
  return (
    <header className="App">
      <Header />
      <ButtonCategory />
      <ProductCategory />
      <Outlet />
    </header>
  );
}

export default App;
