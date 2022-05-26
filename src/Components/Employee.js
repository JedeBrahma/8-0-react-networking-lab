import React, { Component } from 'react'
import PetList from "./PetList";
import "./Employee.css";


export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: []
    }
  }
 
 handleClick = (id) =>  {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
     .then(data => data.json())
     .then(pets => {
      this.setState({
        petList:pets
      });

     })
     .catch(err => console.log(err))
 }

  render() {

    const {employeeId, prefix, firstName, lastName, postfix, title} = this.props

  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName} {postfix}</h3>
      <h4>{title}</h4>
      <button onClick={ this.handleClick(employeeId) }>Show Pets</button>
    <PetList petArr={this.state.petList}/>
    </article>
  );
};

}
