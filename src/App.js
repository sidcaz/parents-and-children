import React from 'react';
import './App.css';


class Parent extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      children: [
        {
          header: "first child",
        },
      ],
    };    
  }

  render() {

    return(
      <div>
        <p><b>Hello we made it to our first project!!</b></p>
        <Child
          id='1'
          header="1st child"
          picture='logo192.png'
        />
      </div>
    )
  }
}


class Child extends React.Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    console.log('In this function we want to emit an event to the parent component!!')
  }

  render() {
    return(
      <div>
        <h1>{this.props.header}</h1>
        <img src={this.props.picture}/>
        <button type='button' onClick={this.handleButtonClick}>Action</button>
      </div>
    );

  }

}


export default Parent;
