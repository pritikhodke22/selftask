import React, { Component } from "react";
import { IoAperture } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../imges/mainpage.jpg";
import cardimg1 from "../imges/card1.jpg";
import cardimg2 from "../imges/card2.jpg";
import cardimg3 from "../imges/card3.jpg";
import ourservice1 from "../imges/services1.jpg";
import ourservice2 from "../imges/services2.jpg";
import ourservice3 from "../imges/services3.jpg";
import ourservice4 from "../imges/services4.jpg";
import ourservice5 from "../imges/services5.jpg";
import ourservice6 from "../imges/services6.jpg";
import { BiMenu } from "react-icons/bi";

export class Mainpage extends Component {
  render() {
    return (
      <div>
        {/* Navbar Initialize */}
        <section className="sticky-top mainpage_cards">
          <nav className="navbar navbar-expand-lg container">
            <a className="navbar-brand mainpage_logo" href="#">
              <IoAperture className="text-success" />
              Denver
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ><BiMenu className="navbar-toggler-icon"/>
              {/* <span className="navbar-toggler-icon"></span> */}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mar_lef">
                <li className="nav-item">
                  <a className="nav-link mainpage_links" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mainpage_links" href="#">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mainpage_links" href="#">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link mainpage_links" href="#">
                    PROJECT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mainpage_links" href="#">
                    CLIENT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mainpage_links" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mainpage_links" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section>
          <div id="demo" class="carousel slide" data-ride="carousel">
            {/* <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul> */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img3} alt="Los Angeles" width="1100" height="500" className="carousel_img" />
                <div class="carousel-caption carosel_text">
                  <h1 className="mbresp_head">We Love Make Things Amazing </h1>
                  <h1 className="mbresp_head">And Simple</h1>
                  <p className="mainpage_para">
                    Its a long Established fact that a reader will be distracted
                    by more or loss normal
                  </p>
                  <p>normal</p>
                  <button type="button" class="btn mainpage_greenbtn">
                    Our Service
                  </button>
                  <button type="button" class="btn mainpage_greybtn">
                    Our Portfolio
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img3} alt="Chicago" width="1100" height="500" className="carousel_img" />
                <div class="carousel-caption carosel_text">
                  <h1 className="mbresp_head">We Love Make Things Amazing </h1>
                  <h1 className="mbresp_head">And Simple</h1>
                  <p className="mainpage_para">
                    Its a long Established fact that a reader will be distracted
                    by more or loss normal
                  </p>
                  <p>normal</p>
                  <button type="button" class="btn mainpage_greenbtn">
                    Our Service
                  </button>
                  <button type="button" class="btn mainpage_greybtn">
                    Our Portfolio
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img3} alt="New York" width="1100" height="500" className="carousel_img" />
                <div class="carousel-caption carosel_text">
                  <h1 className="mbresp_head">We Love Make Things Amazing </h1>
                  <h1 className="mbresp_head">And Simple</h1>
                  <p className="mainpage_para">
                    Its a long Established fact that a reader will be distracted
                    by more or loss normal
                  </p>
                  <p>normal</p>
                  <button type="button" class="btn mainpage_greenbtn">
                    Our Service
                  </button>
                  <button type="button" class="btn mainpage_greybtn">
                    Our Portfolio
                  </button>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </section>

        <section className="mainpage_cards">
          <div className="container">
            <div className="row card_padding">
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div class="card">
                  <img
                    class="card-img-top card2_img"
                    src={cardimg1}
                    alt="Card image"
                  />
                </div>
                <div className="card card1_img">
                  <img
                    className="card-img mainpage_card_img"
                    src={cardimg1}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <p className="card-text card_para">John Doe</p>
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                    <a href="#" className="btn mainpage_greenbtn mt-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div class="card">
                  <img
                    class="card-img-top card2_img"
                    src={cardimg2}
                    alt="Card image"
                  />
                </div>
                <div className="card card1_img">
                  <img
                    className="card-img mainpage_card_img"
                    src={cardimg2}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <p className="card-text card_para">John Doe</p>
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                    <a href="#" className="btn mainpage_greenbtn mt-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div class="card">
                  <img
                    class="card-img-top card2_img"
                    src={cardimg3}
                    alt="Card image"
                  />
                </div>
                <div className="card card1_img">
                  <img
                    className="card-img mainpage_card_img"
                    src={cardimg3}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <p className="card-text card_para">John Doe</p>
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                    <a href="#" className="btn mainpage_greenbtn mt-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h3 className="text-center pt-5">Our Services</h3>
            <h1 className="services_underline">__ ___ __</h1>

            <div className="row services_card">
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="card servicescard_img">
                  <img
                    className="card-img mainpage_services_img"
                    src={ourservice1}
                    alt="Card image"
                  />
                  <div className="card-body pt-0">
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="card servicescard_img">
                  <img
                    className="card-img mainpage_services_img"
                    src={ourservice2}
                    alt="Card image"
                  />
                  <div className="card-body pt-0">
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="card servicescard_img">
                  <img
                    className="card-img mainpage_services_img"
                    src={ourservice3}
                    alt="Card image"
                  />
                  <div className="card-body pt-0">
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 services_card">
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="card servicescard_img">
                  <img
                    className="card-img mainpage_services_img"
                    src={ourservice4}
                    alt="Card image"
                  />
                  <div className="card-body pt-0">
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="card servicescard_img">
                  <img
                    className="card-img mainpage_services_img"
                    src={ourservice5}
                    alt="Card image"
                  />
                  <div className="card-body pt-0">
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="card servicescard_img">
                  <img
                    className="card-img mainpage_services_img"
                    src={ourservice6}
                    alt="Card image"
                  />
                  <div className="card-body pt-0">
                    <h4 className="card-title">Business Management Services</h4>
                    <p className="card-text card_para">
                      Some example text some example text. John Doe is an
                      architect and engineer Some example text some example
                      text. John Doe is an architect and engineer
                    </p>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Mainpage;
