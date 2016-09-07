import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';


export default class InteractionToggle extends React.Component {

  constructor(){
    super();

  }

  render(){
    return (
      <div className="row interaction-toggle" onClick={this.props.onClick}>

      </div>
    );
  }

}
