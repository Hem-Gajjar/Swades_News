import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <News pageSize={8} country="in" category="general" />
    </div>
  );
}

export default App;
