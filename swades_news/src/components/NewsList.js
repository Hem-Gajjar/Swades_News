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
            // width: "20rem",
            height: "26rem",
            background: "rgb(0,133,187)",
            background:
              "linear-gradient(176deg, rgba(0,133,187,0.43469887955182074) 0%, rgba(253,253,253,0.23301820728291311) 100%)",
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
