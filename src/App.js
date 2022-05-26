import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};
}


// https://vet-lab-8-4.herokuapp.com/
// https://vet-lab-8-4.herokuapp.com/api/employees