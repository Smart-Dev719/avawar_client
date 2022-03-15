import { Dashboard } from "./view/Dashboard";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
