import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <LoadingBar
            color="#0e3386"
            progress={this.state.progress}
            height={6}
            style={{ borderBottom: "2px solid white" }}
          />
          <Routes>
            <Route
              exact
              key="home"
              path=""
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              key="general"
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              key="business"
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              key="entertainment"
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              key="health"
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              key="sports"
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              key="science"
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              key="technology"
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={8}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
