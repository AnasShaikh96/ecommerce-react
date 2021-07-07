import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ItemContextProvider from "./contexts/ItemContext";
import "./App.css";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <ItemContextProvider>
        <Navbar />
        <Products />
      </ItemContextProvider>
    </CartContextProvider>
  );
}
export default App;
