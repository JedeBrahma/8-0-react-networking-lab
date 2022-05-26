import React, { Component } from 'react'

export default class PetList extends Component {
  constructor(props) {
    super(props) 
     
  }
render() {
  const {petArr} = this.props
  return (
    <aside className="pets-list">
   
      <p>{console.log(petArr)}</p>
    </aside>
  );
};

}
