import React from "react";
import SideNav from "./SideNav";
import Bookings from "./Bookings";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import MobTabNav from "./MobTabNav";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home_container_sidenav"><SideNav /></div>
      <section>
      <div className="mob-tab-nav"><MobTabNav /></div>
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/booking" />
          </Route>
          <Route path="/booking" exact component={Bookings} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </section>
    </div>
  );
};

export default Home;
