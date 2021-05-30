import React from "react";
import { Card, Row, Col, Image, Button, Alert } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const SearchResultCard = ({ filterSearchResult, validationError }) => {
  const cardColor = {
    "Available Book Now": "success",
    Unavailable: "danger",
    "Check Status": "primary",
  };
  const getButtonFlag = (type) => {
    return type === "Available Book Now" || type === "Check Status"
      ? true
      : false;
  };
  return (
    <>
      <Row>
        {filterSearchResult.length !== 0 &&
          filterSearchResult.map((flight) => {
            return (
              <Col lg={4} md={6} sm={6}>
                <Card
                  bg={cardColor[flight.status]}
                  text="white"
                  className="mb-2 custom-card"
                >
                  <Card.Header>{flight.status}</Card.Header>
                  <Card.Body>
                    <Card.Title className="card-title">
                      <span>
                        <Image
                          src="logo192.png"
                          roundedCircle
                          className="cardImg"
                        />{" "}
                      </span>
                      <span>{flight.name}</span>
                      {getButtonFlag(flight.status) && (
                        <span className="booknow-span">
                          <button className="booknow">
                            {flight.status === "Available Book Now"
                              ? "Book Now"
                              : "Check Status"}
                          </button>
                        </span>
                      )}
                    </Card.Title>
                    <Card.Text>
                      <div className="route-price-container">
                        <div className="route-countainer">
                          <div className="route-countainer__source">
                            {flight.departure}
                          </div>
                          <div className="route-countainer__eta">
                            <div className="route-countainer__eta-hrs">
                              {flight.duration} Hours
                            </div>
                            <div className="route-countainer__eta-bar"></div>
                          </div>
                          <div className="route-countainer__dest">
                            {flight.arrival}
                          </div>
                        </div>
                        <div className="price-container">
                          <div className="text-right">
                            {" "}
                            &#8377; {flight.cost}
                          </div>
                        </div>
                      </div>
                    </Card.Text>
                    <Card.Text className="rating-container">
                      <div className="rating-star">
                        <StarRatings
                          rating={Number(flight.rating)}
                          starRatedColor="#FFBD33"
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                          starSpacing="1px"
                        />
                      </div>
                      <div className="rating-figure">{flight.rating}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        )}
      </Row>
      { filterSearchResult.length === 0 && validationError === '' && <div>
          <Alert variant="danger">No flight found for search.</Alert>
      </div>}
    </>
  );
};

export default SearchResultCard;
