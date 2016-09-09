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
            <ul>
              <li>View Offers</li>
              <li>Research Options</li>

            </ul>

          </div>
          <div className="col-md-1">
          <ul>
            <li>Select Device & Service</li>
            <li>Select Accessory & Features</li>
            <li>Abandon Purchase</li>

          </ul>
          </div>
          <div className="col-md-1">
          <ul>
            <li>Set Up Device</li>
            <li>Understand Service & Billing</li>
            <li>Understand Care</li>

          </ul>
          </div>
          <div className="col-md-1">
          <ul>
            <li>Manage Account</li>
            <li>Use Device</li>
            <li>Identify Issues</li>
            <li>Get Help</li>

          </ul>

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-1">
          <ul>
            <li>Change/Migrate Services</li>
            <li>Buy New Device & Service</li>
          </ul>
          </div>
          <div className="col-md-1">
          <ul>
            <li>Apply New Offers</li>
            <li>Buy Accessories & Additional Features</li>
            <li>View Competitors Marketing</li>
            <li>Research Options at Other carriers</li>

          </ul>
          </div>
          <div className="col-md-1">
          <ul>
            <li>Cancel Service</li>
            <li>Switch Provider</li>
          </ul>
          </div>

      </div>

    )
  }
}
