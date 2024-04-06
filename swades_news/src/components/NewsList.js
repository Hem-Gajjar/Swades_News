import React, { Component } from "react";

export class NewsList extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="">
        <div
          className="card my-3  "
          style={{
            textAlign: "left",
            width: "20rem",
            height: "26rem",
            backgroundColor: "rgb(195 195 195 / 30%)",
          }}
        >
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://img.etimg.com/thumb/msid-108326970,width-1200,height-630,imgsize-52706,overlay-economictimes/photo.jpg"
            }
            className="card-img-top"
            style={{ height: "200px", width: "100%", textAlign: "center" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn  btn-dark"
              style={{
                position: "absolute",
                bottom: "0",
                margin: "10px",
                left: "100px",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsList;
