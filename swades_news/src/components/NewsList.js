import React, { Component } from "react";

export class NewsList extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="">
        <div
          className="card my-3  "
          style={{
            textAlign: "left",
            height: "30rem",
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
            <span
              className="position-absolute top-0 start-50  translate-middle badge "
              style={{
                border: "2px solid black",
                color: "black",
                fontSize: "14px",
                width: "80%",
                backgroundColor: "rgb(224,131,8)",
                background:
                  "linear-gradient(97deg, rgba(224,131,8,1) 0%, rgba(255,255,255,1) 51%, rgba(76,145,0,1) 100%)",
              }}
            >
              Source: {source ? source : "Unknown"}
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
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
