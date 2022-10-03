import ButtonCategory from './components/ButtonCategory';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { ProductsProvider } from './components/ProductContext';
import ProductCategory from './components/ProductCategory';

function App() {
  return (
    <ProductsProvider>
      <header className="App">
        <Header />
        <ButtonCategory />
        <ProductsList />
        <ProductCategory />
      </header>
    </ProductsProvider>
  );
}

export default App;
