import React, { useState } from "react";
import { Nav, Row, Col, Form, Button, Alert } from "react-bootstrap";
import CostFilter from "./CostFilter";
import SearchResultCard from "./SearchResultCard";
import { flightData } from "../data";
import {
  getDepartureCity,
  getArrivalCity,
  getFilteredSearchData,
  getFilteredRangeData,
  handleFilterValidation,
} from "./util";

const NewBooking = () => {
  const [departure, setDeparture] = useState(getDepartureCity()[0]);
  const [arrival, setArrival] = useState(getArrivalCity()[0]);
  const [date, setDate] = useState('');
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [filterSearchResult, setFilterSearchResult] = useState(flightData);
  const [validationError, setValidationError] = useState('')

  const handleSerach = () => {
    let validationResult = handleFilterValidation(
      departure,
      arrival,
      minimum,
      maximum,
      date
    );
    if (typeof validationResult === "string") {
      setValidationError(validationResult);
      return false;
    } else {
      setValidationError('');
    }
    let searchFlightData = getFilteredSearchData(
      departure,
      arrival,
      minimum,
      maximum
    );
    setFilterSearchResult(searchFlightData);
  };



  return (
    <div className="section-body">
      <Row>
        <Col xs={6} md={2} lg={2}>
          <label for="departure">Departure</label>
          <select
            class="form-control"
            id="departure"
            onChange={(e) => setDeparture(e.target.value)}
          >
            {getDepartureCity().map((city, index) => {
              return <option>{city}</option>;
            })}
          </select>
        </Col>
        <Col xs={6} md={2} lg={2}>
          <label for="arrival">Arrival</label>
          <select
            class="form-control"
            id="arrival"
            onChange={(e) => setArrival(e.target.value)}
          >
            {getArrivalCity().map((city, index) => {
              return <option>{city}</option>;
            })}
          </select>
        </Col>
        <Col xs={12} md={2} lg={2}>
          <label for="Jdate">Journey Date</label>
          <Form.Control
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="Journey Date"
            placeholder="Date"
          />
        </Col>
        <Col xs={12} md={4} lg={4}>
          <CostFilter
            minimum={minimum}
            maximum={maximum}
            setMinimum={setMinimum}
            setMaximum={setMaximum}
            setFilterSearchResult={setFilterSearchResult}
          />
        </Col>
        <Col xs={12} md={2} lg={2} className="pad-b-20">
          <Button variant="primary" size="md" onClick={handleSerach}>
            Search
          </Button>
        </Col>
      </Row>
      {validationError !== "" && (
        <Alert variant="info">{validationError}</Alert>
      )}
      <div className="search-container">
        <SearchResultCard
          filterSearchResult={filterSearchResult}
          validationError={validationError}
        />
      </div>
    </div>
  );
};

export default NewBooking;
