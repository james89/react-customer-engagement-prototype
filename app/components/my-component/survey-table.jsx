import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import moment from 'moment';
import { Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import axios from 'axios';


import Thermometer from '../thermometer/thermometer.jsx';
import FeedbackConfidenceRow from '../feedbackConfidenceRow/feedback-confidence.jsx';
import TextAnalyticsPositiveRow from '../textAnalyticsPositiveRow/text-analytics-positive.jsx';


const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Buy New Device & Services">

    		<p>
    Learn how to Upgrade/JUMP Device!
    Learn how to Add New Line of Service
    Select / Purchase New Device
    Add Services & Features
    Add New Line of Service
    Review & Confirm Account Updates</p>
    <Button>See Detailed View</Button>
  </Popover>
);

const defaultProps = {
	data: ''
}

export default class SurveyTable extends React.Component {

  constructor(){
    super();
  }

  render(){
      var customerSatisfactionNodes = Object.keys(custSatisfactionData).map(function(rating) {

        if (custSatisfactionData[rating] <= 4){
          return (
            <div className="col-md-1 rating-red">
              {custSatisfactionData[rating]}
            </div>
          )

        } else if (custSatisfactionData[rating] > 4 && custSatisfactionData[rating] <= 7){
          return (
            <div className="col-md-1 rating-orange">
              {custSatisfactionData[rating]}
            </div>
          )
        } else if (custSatisfactionData[rating] > 7){
          return (
            <div className="col-md-1 rating-green">
              {custSatisfactionData[rating]}
            </div>
          )
        }

     });

     var easeOfDoingBusinessNodes = Object.keys(easeRatings).map(function(rating) {

       if (easeRatings[rating] <= 4){
         return (
           <div className="col-md-1 rating-red">
             {easeRatings[rating]}
           </div>
         )

       } else if (easeRatings[rating] > 4 && easeRatings[rating] <= 7){
         return (
           <div className="col-md-1 rating-orange">
             {easeRatings[rating]}
           </div>
         )
       } else if (easeRatings[rating] > 7){
         return (
           <div className="col-md-1 rating-green">
             {easeRatings[rating]}
           </div>
         )
       }

     });

     


  }


}
