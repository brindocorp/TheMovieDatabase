import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Default from "../layout/Default";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { Button } from "semantic-ui-react";
import StarComponent from "../components/StarComponent";
import MovieCard from "../components/MovieCards";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Default>
        <div className="bg-grad">
          <div className="container-fluid bg-image p-0 p-md-5 ">
            <div className="row px-3 mb-4 mt-5 d-flex">
              <div className="col d-flex justify-content-between ">
                <div className="div text-white logo-font-size ">
                  {" "}
                  <p className="font-weight-bolder bg-title my-auto">
                    {" "}
                    WRATH OF THE TITANS
                  </p>
                  <div className="div text-white">
                    <span className="text-white small mr-2 bg-genre">
                      Fantasy
                    </span>
                    <span className="text-white small mr-2 bg-genre">
                      Fantasy
                    </span>
                    <span className="text-white small mr-2 bg-genre">
                      Fantasy
                    </span>

                    <span className="text-white small m=2 bg-genre">
                      Duration : 1hr 30mins
                    </span>
                  </div>
                  <div>
                    <Button className="text-white m-2" color="red">
                      <span className="text-white">Watch Movie</span>
                    </Button>

                    <Button basic inverted content="View Info" />

                    <Button className="text-white m-2" inverted basic>
                      <span className="text-white">Add To WishList</span>
                    </Button>
                  </div>
                </div>

                <div className="col review-col">
                  <div className="div text-white bg-review  p-3 ">
                    <div>
                      <span className="d-none d-lg-block">Rating</span>
                      <span className="small bg-rating-text d-none d-lg-block">
                        based on 1000 reviews
                      </span>
                      <div className="d-flex">
                        <template className="d-none d-lg-block">
                          <StarComponent rate={2.4} size={"10px"} />
                        </template>

                        <span className="m-auto small p-1">2.4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          //section to display movies
        }
        <section className="section-trend">
          <div className="container ">
            <div className="row ">
              <div className="col">
                <Nav tabs className="d-flex justify-content-between pt-3">
                  <template className="d-flex ">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Trending
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Top Rated
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Top Rated
                      </NavLink>
                    </NavItem>

                    <NavItem className="p-0">
                      <NavLink
                        className={classnames({ active: activeTab === "4" })}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        Top Rated
                      </NavLink>
                    </NavItem>
                  </template>

                  <div>
                    {
                      // <span className="text-black">far</span>
                    }
                  </div>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="container-fluid py-5">
                      <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => {
                          return (
                            <div
                              className="col-12 col-md-4 col-lg-4 my-1"
                              key={value}
                            >
                              <MovieCard />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6"></Col>
                      <Col sm="6"></Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </section>
      </Default>

      <style jsx global>{`
        @media (max-width: 768px) {
          .bg-image {
            min-height: 100vh;
          }
          .bg-title {
            font-size: 20px !important;
          }
          .bg-genre {
            font-size: 10px;
          }
          .logo-font-size {
            font-size: 20px !important;
          }
        }
        .bg-genre {
          opacity: 0.9;
          font-weight: 800;
        }

        .bg-grad {
          width: "-webkit-fill-available";
        }
        .bg-grad::before {
          /* content: '', */
          background: linear-gradient(
            0deg,
            rgba(79, 79, 79, 0.6),
            rgba(79, 79, 79, 0.6)
          );
          content: "";
          height: auto;
          min-height: 80vh;
          position: absolute;
          top: 0px;
          // width: 380px;
          width: -webkit-fill-available;
          opacity: 0.3;
          //
          // position: absolute;
          // top: 0;
          // left: 0;
          // opacity: 0.5;
          // display: block;
          // width: 100%;
          // height: 100%;
          background: linear-gradient(180deg, #ae276d 0%, #000000 100%);
        }
        .bg-image {
          background: url("/cinema_bg.jpg");
          height: auto;
          min-height: 80vh;
          background-size: cover;
          display: flex;

          justify-content: space-between;

          flex-direction: column-reverse;
        }
        .bg-review {
          border: 1px solid #fff;
          clear: none;
          float: right;
        }
        .bg-rating-text {
          opacity: 0.9;
        }
        .bg-title {
          font-size: 35px;
          opacity: 0.9;
        }
        .logo-font-size {
          font-size: 2rem;
        }
        .review-col {
          /* clear: both; */
          display: flex;
          /* padding-top: 80px; */
          justify-content: flex-end;
          height: fit-content;
          align-self: flex-end;
        }
        .section-trend {
          background: #5b4b5a0f;
        }
        .nav-tabs .nav-item.show .nav-link,
        .nav-tabs .nav-link.active {
          /* color: #495057; */
          background-color: transparent !important;
          // border-color: transparent !important;
          border-bottom: 2px solid red;
          border-top: none;
          border-left: none;
          border-right: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
