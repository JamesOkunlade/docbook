import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Appointments from "../containers/Appointments";
import AppointmentById from "../containers/AppointmentById";
import Doctors from "../containers/Doctors";
import DoctorById from "../containers/DoctorById";
import Specialities from "../containers/Specialities";
import NotFound from "../containers/NotFound";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/appointments" component={Appointments} />
        <Route path= {`/appointment/:appointmentId`} component={AppointmentById} />
        <Route path="/doctors" component={Doctors} />
        <Route path= {`/doctor/:doctorId`} component={DoctorById} />
        <Route path="/specialities" component={Specialities} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
