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

  handleButtonClick(buttonId){
     if (buttonId === 1){
    const message = 'In this function we want to emit an event to the parent component!!';
    this.setState({ message });
    console.log(message);
     }
  }

  render() {
    return(
      <div>
        <h1>{this.props.header}</h1>
        <img src={this.props.picture} alt={this.props.header}/>
        <button type='button' onClick={() => this.handleButtonClick(1)}>Action</button>
      </div>
    );

  }

}

class Parent2 extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      children: [
        {
          header: "Second child",
        },
      ],
    };    
  }

  render() {

    return(
      <div>
        <Child2
          id='2'
          header="2nd child"
          picture='spelman.png'
        />
      </div>
    )
  }
}


class Child2 extends React.Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(buttonId){
    if (buttonId === 2){
    const message2 = 'I was able to show a parent-child component relationship!'; 
    this.setState({ message2 });
    console.log(message2);
    }
  }


  render() {
    return(
      <div>
        <h1>{this.props.header}</h1>
        <img src={this.props.picture} alt={this.props.header} />
        <button type='button' onClick={() => this.handleButtonClick(2)}>Action</button>
      </div>
    );

  }

}



export { Parent, Parent2 };
// ...existing code... 