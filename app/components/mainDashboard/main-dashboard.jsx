import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import moment from 'moment';
import { Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import axios from 'axios';
import { Link } from 'react-router';


import Thermometer from '../thermometer/thermometer.jsx';
import FeedbackConfidenceRow from '../feedbackConfidenceRow/feedback-confidence.jsx';
import TextAnalyticsPositiveRow from '../textAnalyticsPositiveRow/text-analytics-positive.jsx';
import TextAnalyticsNegativeRow from '../textAnalyticsNegativeRow/text-analytics-negative.jsx';

import InteractionPointsRow from '../interactionPoints/interaction-points.jsx';
import InteractionToggle from '../interactionPoints/interaction-toggle.jsx';



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


// MainDashboard.defaultProps = defaultProps;

export default class MainDashboard extends React.Component {
	constructor() {
		super();

		this.handleApply = this.handleApply.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

		this.handleClick = e => {
			this.setState({ target: e.target, show: !this.state.show });
		};
		this.state = {
			show: false,
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
      data: {},
      data2: '',
      easeRatings: undefined,
      firstOrSecondJSON: undefined,
      dashboardData: undefined,
      positiveRowData: '',
      intRowVisible: false
		};

	}
	handleApply(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }

  handleCancel() {
    this.setState({
      startDate: undefined,
      endDate: undefined,
    });
  }



  getJSON () {
    let jsonPath = '';
    this.setState({initialDataShown: true})

    if(this.state.firstOrSecondJSON === 'first'){
      jsonPath = './dashboard2.json'
      this.setState({firstOrSecondJSON: 'second'})
    } else {
      jsonPath = './dashboard.json'
      this.setState({firstOrSecondJSON: 'first'})

    }
    return axios.get('./dashboard.json')
      .then(function(result){

        this.setState({
          dashboardData: result.data.dashboard.customerExperience,
          data2: result.data.dashboard.customerExperience.customerSatisfaction,
          easeRatings: result.data.dashboard.customerExperience.easeOfDoingBusiness,
          positiveRowData: result.data.dashboard.customerExperience.textAnalytics.topPositiveThemes
        })

      }.bind(this));

  }

	componentDidMount () {

    // request dummy data
    axios.get('./dashboard.json')
      .then(function(result){

        this.setState({
          dashboardData: result.data.dashboard.customerExperience,
          data2: result.data.dashboard.customerExperience.customerSatisfaction,
          easeRatings: result.data.dashboard.customerExperience.easeOfDoingBusiness,
          positiveRowData: result.data.dashboard.customerExperience.textAnalytics.topPositiveThemes,
          firstOrSecondJSON: 'first',
          initialDataShown: false
        })

      }.bind(this));



	}

  toggleInteractionRow(){
    this.setState({
      intRowVisible: !this.state.intRowVisible
    })
  }

  shouldRenderTable(){
    let custSatisfactionData = this.state.data2 || '';
    let easeRatings = this.state.easeRatings || '';

         var customerSatisfactionNodes = Object.keys(custSatisfactionData).map(function(rating) {

           if (custSatisfactionData[rating] <= 4){
             return (
               <div className="col-md-1 rating-red">
                 <span>{custSatisfactionData[rating]}</span>
               </div>
             )

           } else if (custSatisfactionData[rating] > 4 && custSatisfactionData[rating] <= 8){
             return (
               <div className="col-md-1 rating-orange">
                 <span>{custSatisfactionData[rating]}</span>
               </div>
             )
           } else if (custSatisfactionData[rating] > 8){
             return (
               <div className="col-md-1 rating-green">
                 <span>{custSatisfactionData[rating]}</span>
               </div>
             )
           }

        });

        var easeOfDoingBusinessNodes = Object.keys(easeRatings).map(function(rating) {

          if (easeRatings[rating] <= 4){
            return (
              <div className="col-md-1 rating-red">
                <span>{easeRatings[rating]}</span>
              </div>
            )

          } else if (easeRatings[rating] > 4 && easeRatings[rating] <= 8){
            return (
              <div className="col-md-1 rating-orange">
                <span>{easeRatings[rating]}</span>
              </div>
            )
          } else if (easeRatings[rating] > 8){
            return (
              <div className="col-md-1 rating-green">
                <span>{easeRatings[rating]}</span>
              </div>
            )
          }

       });

    // if (this.state.startDate && this.state.endDate){
      return (
        <div className="survey row">
          <div className="nps-score">
            <span>NPS Score</span>
              <span className="nps-number">20</span>
          </div>
          <div className="col-sm-12 col-md-12">
            {/* Customer Experience - Header Row */}
            <div className="row row-eq-height table-header">
              <div className="col-md-1"><span className="cust-exp"></span><span className="cust-exp-title">Customer<br /> Experience</span></div>
              <div className="col-md-1 col-header"><span className="sprite sprite-seek"></span>Seek</div>
              <div className="col-md-1 col-header purchase">
                <span className="sprite sprite-purchase"></span><span>Purchase</span>
              </div>
              <div className="col-md-1 col-header first-imp">
                <span className="sprite sprite-first-imp"></span>Develop First Impression
                </div>
              <div className="col-md-1 col-header use">
                <span className="sprite sprite-use">

                  </span>Use
              </div>
              <div className="col-md-1 col-header get-help">
                <span className="sprite sprite-get-help">

                </span>Get Help
              </div>
              <div className="col-md-1 col-header opti">
                <span className="sprite sprite-optimize">

                </span>Optimize
              </div>
              <div className="col-md-1 col-header seek-ext">
                <span className="sprite sprite-seek-ext">

                </span>Seek (External)
              </div>
              <div className="col-md-1 col-header leave">

                <span className="sprite sprite-leave">

                </span>Leave
              </div>
            </div>


            <InteractionPointsRow intRowVisible={this.state.intRowVisible} />
            <InteractionToggle intRowVisible={this.state.intRowVisible} onClick={this.toggleInteractionRow.bind(this)} />

            {/* Customer Satisfaction */}
            <div className="row row-eq-height fb-ratings white-bg">
              <div className="col-md-1 row-header">
              <span className="sprite sprite-cust-satisf">
              </span><span className="row-title">Customer<br/> Satisfaction</span></div>

              {customerSatisfactionNodes}


            </div>
            {/* Ease of Doing Business */}
            <div className="row row-eq-height fb-ratings white-bg">
              <div className="col-md-1 row-header">
              <span className="sprite sprite-ease-bus">

              </span><span className="row-title">Ease of Doing <br/> Business</span></div>
              {easeOfDoingBusinessNodes}
            </div>


            {/* Text Analytics - Positive Themes */}

              <TextAnalyticsPositiveRow positiveThemes={this.state.positiveRowData} />


            {/* Text Analytics - Negative Themes */}
              <TextAnalyticsNegativeRow />
            {/* /Text Analytics Row */}

            {/* Feedback Confidence */}
            <FeedbackConfidenceRow />
            {/* /Feedback Confidence Row */}

            </div>


        </div>
      );
    // }
  }

	render() {



		let { startDate, endDate } = this.state;

		 let label = '';
		 let start = startDate && startDate.format('MMM DD, YYYY') || '';
		 let end = endDate && endDate.format('MMM DD, YYYY') || '';
		 label = start + ' — ' + end;
		 if (start === end) {
			 label = start;
		 }

		 let locale = {
			 format: 'MMM DD, YYYY',
			 cancelLabel: 'Clear',
		 };

		 let pickerProps = {
			 startDate,
			 endDate,
		 };


		return (
			<div className="react-wrapper">

	        <div className="mui-appbar">
	          {/* content */}
	          <table width="100%">
	            <tbody><tr style={{verticalAlign: 'middle'}}>
	                <td className="mui--appbar-height header">Unified Customer Feedback</td>
	                <td className="nav-items" align="right">
                    <Link to="/" className="mui-btn mui-btn--primary active">Main Dashboard</Link>
                    <Link to="/channel" className="mui-btn mui-btn--primary">Channel Dashboard</Link>
	                </td>
	              </tr>
	            </tbody></table>
							</div>
	        <div className="container-fluid">

		          <div className="row datepick clearfix">
								<div className="datepicker col-md-4">

										          <DatetimeRangePicker
                                autoApply={true}
										            autoUpdateInput={false}
                                dateFormat={'MMM DD YYYY'}
										            locale={locale}
										            onApply={this.handleApply.bind(this)}
										            onCancel={this.handleCancel.bind(this)}
										            {...pickerProps}
										          >

										            <div className="input-group">
                                <div className="input-group-addon">From:</div>
										              <input type="text" className="form-control" value={label}/>
										                {/* <span className="input-group-btn">
										                    <Button className="default date-range-toggle">
										                      <i className="fa fa-calendar glyphicon glyphicon-calendar"/>
										                    </Button>
										                </span> */}
										            </div>
										          </DatetimeRangePicker>
                              	<Button className="datepick-btn col-md-3" onClick={this.getJSON.bind(this)} disabled={!this.state.startDate || !this.state.endDate} >Go</Button>
									</div>

								<div className="rating-key col-md-3">

								<svg width="325px" height="42px" viewBox="965 121 325 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
											<defs>
												<rect id="path-1" x={0} y={0} width={325} height={50} />
												<mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x={0} y={0} width={325} height={50} fill="white">
													<use xlinkHref="#path-1" />
												</mask>
											</defs>
											<g id="Performance-Rating-Key" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" transform="translate(965.000000, 121.000000)">
												<use id="Rectangle-9-Copy" stroke="#D5D5D5" mask="url(#mask-2)" strokeWidth={2} fill="#FFFFFF" xlinkHref="#path-1" />
												<g id="Rating-Colors/text" transform="translate(10.000000, 24.000000)">
													<rect id="Rectangle-12" fill="#E7575C" x={0} y={2} width={15} height={15} />
													<text id="1---6" fontFamily="OpenSans-Bold, Open Sans" fontSize={13} fontWeight="bold" line-spacing={17} fill="#404040">
														<tspan x={26} y={14}>1 - 6 </tspan>
													</text>
													<rect id="Rectangle-12-Copy" fill="#FED86F" x={85} y={2} width={15} height={15} />
													<text id="7---8" fontFamily="OpenSans-Bold, Open Sans" fontSize={13} fontWeight="bold" line-spacing={17} fill="#404040">
														<tspan x={111} y={14}>7 - 8</tspan>
													</text>
													<rect id="Rectangle-12-Copy-2" fill="#85BC40" x={170} y={2} width={15} height={15} />
													<text id="9---10" fontFamily="OpenSans-Bold, Open Sans" fontSize={13} fontWeight="bold" line-spacing={17} fill="#404040">
														<tspan x={196} y={14}>9 - 10</tspan>
													</text>
												</g>
												<text id="PERFORMANCE-RATING" fontFamily="OpenSans-Bold, Open Sans" fontSize={10} fontWeight="bold" line-spacing={13} fill="#404040">
													<tspan x={10} y={19}>PERFORMANCE RATING</tspan>
												</text>
											</g>
										</svg>

	       				</div>
		          </div> {/* /date pick row */}

              {/* First page load dont show table data. If user selects date range, show data as expected. */}

              {/* { this.state.initialDataShown ? this.shouldRenderTable() : null } */}
               { this.shouldRenderTable() }
					</div>

			</div>



		);

	}
}
