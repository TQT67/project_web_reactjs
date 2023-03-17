import { BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup/Signup";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Signup/>
      </BrowserRouter>
    </div>
  );
}

export default App;
