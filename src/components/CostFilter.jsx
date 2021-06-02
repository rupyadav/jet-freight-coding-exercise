import React, {useEffect} from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col, Form } from "react-bootstrap";
import { getFilteredRangeData, handleFilterValidation } from "./util";

const CostFilter = ({
  minimum,
  maximum,
  setMinimum,
  setMaximum,
  setFilterSearchResult,
}) => {

  useEffect(() => {
    let searchFlightData = getFilteredRangeData(minimum, maximum);
    console.log("searchFlightData", searchFlightData);
    setFilterSearchResult(searchFlightData);
    console.log(minimum, maximum);
  }, [minimum, maximum])

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs="6">
          <Form.Label>Min Value : {minimum}</Form.Label>
          <RangeSlider
            value={minimum}
            onChange={(e) => setMinimum(e.target.value)}
            min={0}
            max={15000}
          />
        </Col>
        <Col xs="6">
          <Form.Label>Max Value : {maximum}</Form.Label>
          <RangeSlider
            value={maximum}
            onChange={(e) => setMaximum(e.target.value)}
            min={minimum}
            max={15000}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default CostFilter;
