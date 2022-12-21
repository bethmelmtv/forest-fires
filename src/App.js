// import logo from './logo.svg';
import "./App.css";
import { getfireData } from "./services/fetch-utils";

function App() {
  async function handleSubmit() {
    const response = await getfireData();
    console.log("response", response);
    return response;
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>Get Fires</button>
    </div>
  );
}

export default App;
