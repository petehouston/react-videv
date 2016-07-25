import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allDevs from './data/devlist.js';

class HeaderBar extends Component {
  render() {
    return (
      <div className="Header-Container">
        <div className="Header-Content">
          <h1 className="Header-Title">
            @petehouston/react-videv
          </h1>
          <div className="Header-Subtitle">
            The directory of Vietnamese React Developers.
          </div>
        </div>
      </div>
    )
  }
}

class DevCard extends Component {
  render() {
    return (
      <div className="DevCard-Container">
        <div className="DevCard-Avatar">
          <img src={this.props.avatar} />
        </div>

        <div className="DevCard-Name">
          {this.props.name}
        </div>

        <div className="DevCard-Contact">
          <ul>
            <li><a href={this.props.homepage}><i className="fa fa-globe"></i></a></li>
            <li><a href={this.props.facebook}><i className="fa fa-facebook"></i></a></li>
            <li><a href={this.props.github}><i className="fa fa-github"></i></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

class DevBlock extends Component {
  render() {
    let renderDevList = this.props.list.map(dev => <DevCard avatar={dev.avatar} name={dev.name} homepage={dev.homepage} facebook={dev.facebook} github={dev.github} />)
    return (
      <div className="DevBlock-Container">
        {renderDevList}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devList: allDevs
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderBar />
        <DevBlock list={this.state.devList} />
      </div>
    );
  }
}

export default App;
