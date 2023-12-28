import "./App.css";
import MainVirtualizedComponent from "./components/MainVirtualizedComponent/MainVirtualizedComponent";
import items from "./mocks/items";

function App() {
  return <MainVirtualizedComponent items={items} />;
}

export default App;
