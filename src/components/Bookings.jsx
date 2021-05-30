import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import NewBooking from "./NewBooking";
import PastBookings from "./PastBookings";

const Bookings = () => {
  const [tabs, setTabs] = useState(true);
  return (
    <>
        <div className="section-tab">
          <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/" onClick={() => setTabs(!tabs)}>New Booking</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setTabs(!tabs)} eventKey="link-1">
                Past Bookings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {tabs ? <NewBooking /> : <PastBookings />}
    </>
  );
};

export default Bookings;
