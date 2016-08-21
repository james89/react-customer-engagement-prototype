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
			startDate: undefined,
      endDate: undefined,
      data: {},
      data2: '',
      easeRatings: undefined,
      firstOrSecondJSON: undefined,
      dashboardData: undefined,
      positiveRowData: ''
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
    return axios.get(jsonPath)
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

  shouldRenderTable(){
    let custSatisfactionData = this.state.data2 || '';
    let easeRatings = this.state.easeRatings || '';

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

    if (this.state.startDate && this.state.endDate){
      return (
        <div className="survey row">
          <div className="col-sm-12 col-md-12">
            {/* Customer Experience - Header Row */}
            <div className="row row-eq-height">
              <div className="col-md-1 row-header">Customer Experience</div>
              <div className="col-md-1 col-header">Seek (T-Mobile)</div>
              <div className="col-md-1 col-header">Purchase</div>
              <div className="col-md-1 col-header">Develop First Impression</div>
              <div className="col-md-1 col-header">Use</div>
              <div className="col-md-1 col-header">Get Help</div>
              <div className="col-md-1 col-header">Optimize</div>
              <div className="col-md-1 col-header">Seek (External)</div>
              <div className="col-md-1 col-header">Leave</div>
            </div>
            {/* Interaction Points */}
            <div className="row row-eq-height interaction-pts">
              <div className="col-md-1 row-header">Interaction Points</div>
              <div className="col-md-1">
                {/* swap out the html attributes with JS attributes in popover options object (refer to documentation) when JSON data is ready */}
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>A</Button>
                </OverlayTrigger>

                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>B</Button>
                </OverlayTrigger>
                </div>
              <div className="col-md-1">
              <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                <Button>C</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                <Button>D</Button>
              </OverlayTrigger>
              </div>
              <div className="col-md-1">
              <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                <Button>E</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                <Button>F</Button>
              </OverlayTrigger>
              </div>
              <div className="col-md-1">
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>G</Button>
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>H</Button>
                </OverlayTrigger>
              </div>
              <div className="col-md-1">
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>I</Button>
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>J</Button>
                </OverlayTrigger>
              </div>
              <div className="col-md-1">
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>K</Button>
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>L</Button>
                </OverlayTrigger>
              </div>
              <div className="col-md-1">
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>M</Button>
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>N</Button>
                </OverlayTrigger>
              </div>
              <div className="col-md-1">
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>O</Button>
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverHoverFocus}>
                  <Button>P</Button>
                </OverlayTrigger>
              </div>
            </div>
            {/* Customer Satisfaction */}
            <div className="row row-eq-height">
              <div className="col-md-1 row-header light-gray-bg">Customer Satisfaction</div>

              {customerSatisfactionNodes}

              {/* <div className="col-md-1 rating-orange">

              </div>
              <div className="col-md-1 rating-orange">8</div>
              <div className="col-md-1 rating-green">9</div>
              <div className="col-md-1" />
              <div className="col-md-1" />
              <div className="col-md-1" />
              <div className="col-md-1" />
              <div className="col-md-1" /> */}
            </div>
            {/* Ease of Doing Business */}
            <div className="row row-eq-height">
              <div className="col-md-1 row-header light-gray-bg">Ease of Doing Business</div>
              {easeOfDoingBusinessNodes}
            </div>
            {/* Text Analytics - Positive Themes */}

              <TextAnalyticsPositiveRow positiveThemes={this.state.positiveRowData} />


            {/* Text Analytics - Negative Themes */}
            <div className="row row-eq-height text-analytics">
              <div className="col-md-1 row-header"><span>Text Analytics - <span className="negative">Negative Themes</span></span></div>
              <div className="col-md-2 negative">Competitors, Discounts and Offers, Affordability for Price</div>
              <div className="col-md-4 negative">Competitors, Discounts and Offers, Affordability for Price</div>
              <div className="col-md-2 negative">Competitors, Discounts and Offers, Affordability for Price</div>
            </div>{/* /Text Analytics Row */}
            {/* Feedback Confidence */}
            <FeedbackConfidenceRow />
            {/* /Feedback Confidence Row */}
            <div className="thermometer">
              <Thermometer />
            </div>

            </div>


        </div>
      );
    }
  }

	render() {



		let { startDate, endDate } = this.state;

		 let label = '';
		 let start = startDate && startDate.format('YYYY-MM-DD') || '';
		 let end = endDate && endDate.format('YYYY-MM-DD') || '';
		 label = start + ' - ' + end;
		 if (start === end) {
			 label = start;
		 }

		 let locale = {
			 format: 'YYYY-MM-DD',
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

		          <div className="row datepick">
								<div className="datepicker">

										          <DatetimeRangePicker
                                autoApply={true}
										            autoUpdateInput={false}
										            locale={locale}
										            onApply={this.handleApply}
										            onCancel={this.handleCancel}
										            {...pickerProps}
										          >

										            <div className="input-group">
										              <input placeholder="Please select a date range" type="text" className="form-control" value={label}/>
										                <span className="input-group-btn">
										                    <Button className="default date-range-toggle">
										                      <i className="fa fa-calendar glyphicon glyphicon-calendar"/>
										                    </Button>
										                </span>
										            </div>
										          </DatetimeRangePicker>

									</div>
									<Button className="datepick-btn" onClick={this.getJSON.bind(this)} disabled={!this.state.startDate || !this.state.endDate} >Go</Button>

								<div className="col-md-3 rating-key">
								<svg width="325px" height="50px" viewBox="965 121 325 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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

              { this.state.initialDataShown ? this.shouldRenderTable() : null }

					</div>

			</div>



		);

	}
}
