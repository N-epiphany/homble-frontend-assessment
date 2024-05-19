import "./App.css";
import AppRouter from "./AppRouter";
import ProductDetails from "./screens/ProductDetails";
import Products from "./screens/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
