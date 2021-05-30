import React from "react";
import RangeSlider from 'react-bootstrap-range-slider';
import { Row, Col, Form } from "react-bootstrap";

const CostFilter = ({min, max, setMin, setMax}) => {


  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs="6">
        <Form.Label>
          Min Value : {min}
        </Form.Label>
          <RangeSlider
            value={min}
            onChange={(e) => setMin(e.target.value)}
            min={1000}
            max={15000}
          />
        </Col>
        <Col xs="6">
        <Form.Label>
          Max Value : {max}
        </Form.Label>
          <RangeSlider
            value={max}
            onChange={(e) => setMax(e.target.value)}
            min={min}
            max={15000}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default CostFilter;
