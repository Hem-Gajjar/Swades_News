import React, { Component } from "react";
import NewsList from "./NewsList";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `Swades - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=4d1fbcab57f240939c5cd7b31b5278e3&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d1fbcab57f240939c5cd7b31b5278e3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  previousBtnClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  nextBtnClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3  ">
        <h1>"Swades: Making Headlines, Breaking Illusions."</h1>
        <h2>
          Swades Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row my-2 ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 ">
                <NewsList
                  key={element.title}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.previousBtnClick}
            disabled={this.state.page <= 1}
          >
            ← Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextBtnClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next →
          </button>
        </div>
      </div>
    );
  }
}

export default News;
