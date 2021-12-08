import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./main/main";


function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;