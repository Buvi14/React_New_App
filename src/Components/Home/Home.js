import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <>
      <div className="container mt-4">
        <div
          classname="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* Carousel using Reacg Bootstrap */}
          <Carousel style={{ width: "50%" }}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://i.morioh.com/200708/b74f121f.jpg"
                alt="First slide"
                height="300"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg"
                alt="Second slide"
                height="300"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png"
                alt="Third slide"
                height="300"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* Card for Each technology Details using card */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://developer-tech.com/wp-content/uploads/sites/3/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg"
                className="card-img-top"
                alt="card-img"
              />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-8 bg-light text-center">
            <span className="mt-5 d-flex justify-content-center">
              MongoDB is a source-available cross-platform document-oriented
              database program. Classified as a NoSQL database program, MongoDB
              uses JSON-like documents with optional schemas. MongoDB is
              developed by MongoDB Inc. and licensed under the Server Side
              Public License.
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 bg-light text-center">
            <span className="mt-5 d-flex justify-content-center">
              Express.js, or simply Express, is a back end web application
              framework for Node.js, released as free and open-source software
              under the MIT License. It is designed for building web
              applications and APIs. It has been called the de facto standard
              server framework for Node.js.
            </span>
          </div>
          <div
            className="col-md-4"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/38cea/express-routing-logo.png"
                className="card-img-top"
                alt="card-img"
              />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                className="card-img-top"
                alt="card-img"
              />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-8 bg-light text-center">
            <span className="mt-5 d-flex justify-content-center">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 bg-light text-center">
            <span className="mt-5 d-flex justify-content-center">
              Angular is a TypeScript-based free and open-source web application
              framework led by the Angular Team at Google and by a community of
              individuals and corporations. Angular is a complete rewrite from
              the same team that built AngularJS.
            </span>
          </div>
          <div
            className="col-md-4"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36"
                className="card-img-top"
                alt="card-img"
              />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                className="card-img-top"
                alt="card-img"
              />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-8 bg-light text-center">
            <span className="mt-5 d-flex justify-content-center">
              React is a free and open-source front-end JavaScript library for
              building user interfaces or UI components. It is maintained by
              Facebook and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </span>
          </div>
        </div>
      </div>
      {/* footer in container fluid */}
      <footer className="container-fluid bg-dark mt-5 row">
        <div
          className="text-center p-4 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05);"}}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold">
            Footer Content
          </a>
        </div>
      </footer>
    </>
  );
}
