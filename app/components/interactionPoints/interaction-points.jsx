import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';
import classNames from 'classnames';



export default class InteractionPointsRow extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let interactionClass = classNames({
      'row row-eq-height interaction-pts': true,
      'showRow': this.props.intRowVisible
    });


    return (
      <div className={interactionClass}>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">


          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-1">

          </div>

      </div>

    )
  }
}
