import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route
            exact
            key="general"
            path="/"
            element={<NewsPage pageSize={8} country="in" category="general" />}
          />
          <Route
            exact
            key="business"
            path="/business"
            element={<NewsPage pageSize={8} country="in" category="business" />}
          />
          <Route
            exact
            key="entertainment"
            path="/entertainment"
            element={
              <NewsPage pageSize={8} country="in" category="entertainment" />
            }
          />
          <Route
            exact
            key="general"
            path="/general"
            element={<NewsPage pageSize={8} country="in" category="general" />}
          />
          <Route
            exact
            key="health"
            path="/health"
            element={<NewsPage pageSize={8} country="in" category="health" />}
          />
          <Route
            exact
            key="sports"
            path="/sports"
            element={<NewsPage pageSize={8} country="in" category="sports" />}
          />
          <Route
            exact
            key="science"
            path="/science"
            element={<NewsPage pageSize={8} country="in" category="science" />}
          />
          <Route
            exact
            key="technology"
            path="/technology"
            element={
              <NewsPage pageSize={8} country="in" category="technology" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Separate News component to be rendered in Routes
function NewsPage({ pageSize, country, category }) {
  return <News pageSize={pageSize} country={country} category={category} />;
}
