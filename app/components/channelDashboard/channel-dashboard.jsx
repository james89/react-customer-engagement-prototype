import React from 'react';
import { Link } from 'react-router';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
import { VictoryPie } from 'victory';
// import ChartJS from 'react-chartjs';
import axios from 'axios';
import classNames from 'classnames';
import { Line, Circle } from 'rc-progress';
import CircularProgress from '../plugins/circle-progress.jsx';
import moment from 'moment';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import { Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';


// const ResponsiveReactGridLayout = ReactGridLayout.Responsive;
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const LayoutLarge = [
  {i: 'digital', x: 0, y: 0, w: 4,  h: 4.5, maxW: 4},
  {i: 'callCenter', x: 4, y: 0, w: 4, h: 4.5, maxW: 4},
  {i: 'inStore', x: 8, y: 0, w: 4, h: 4.5, maxW: 4}
];



const LayoutMedium = [
  {i: 'digital', x: 0, y: 0, w: 4,  h: 4.5},
  {i: 'callCenter', x: 4, y: 0, w: 4, h: 4.5},
  {i: 'inStore', x: 8, y: 0, w: 4, h: 4.5}
];

const LayoutSmall = [
  {i: 'digital', x: 2, y: 0, w: 8,  h: 4},
  {i: 'callCenter', x: 2, y: 0, w: 8, h: 4},
  {i: 'inStore', x: 2, y: 0, w: 8, h: 4}
];
const LayoutXS = [
  {i: 'digital', x: 1, y: 0, w: 6,  h: 4.5},
  {i: 'callCenter', x: 1, y: 0, w: 6, h: 4.5},
  {i: 'inStore', x: 1, y: 0, w: 6, h: 4.5}
]
const Layouts = {
  lg: LayoutLarge,
  md: LayoutMedium,
  sm: LayoutSmall,
  xs: LayoutXS
}

class ChannelDashboard extends React.Component{

  constructor(){
    super()

    this.state = {
      percentage: 0,
      circleColor: null,
      data: this.getData(),
      digitalData: [{
        'chart':[]
      }],
    digitalDataChart:[{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''}],
      callCenterData: [{}],
          callCenterDataChart:[{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''}],
      inStoreData: [{}],
          inStoreDataChart:[{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''},{customerSatisfaction: '',customerEffor: ''}]
    }
  }
  getData() {
      const rand = () => Math.max(Math.floor(Math.random() * 10000), 1000);
      return [
        { x: "", y: rand()},
        { x: "", y: rand()}
      ];
    }

  renderProgressCircles() {

  }
  componentDidMount(){

    this.setStateInterval = window.setTimeout(() => {
      this.setState({
        data: this.getData()
      });
    }, 500);
    axios.get('./channelDashboard.json')
      .then(function(result){
        this.setState({
          digitalData: result.data.channelDashboard.satisfactionrate[0],
          digitalDataChart: result.data.channelDashboard.satisfactionrate[0].chart,
          callCenterData: result.data.channelDashboard.satisfactionrate[1],
          callCenterDataChart: result.data.channelDashboard.satisfactionrate[1].chart,
          inStoreData: result.data.channelDashboard.satisfactionrate[2],
          inStoreDataChart: result.data.channelDashboard.satisfactionrate[2].chart,
          digitalPercentage: result.data.channelDashboard.satisfactionrate[0].overall_score,
          inStorePercentage: result.data.channelDashboard.satisfactionrate[2].overall_score,
          callCenterPercentage: result.data.channelDashboard.satisfactionrate[1].overall_score

        })
        console.log(result.data.channelDashboard.satisfactionrate[1].chart)
      }.bind(this));

  }

  componentWillUnmount() {
  window.clearInterval(this.setStateInterval);
}

  // http://www.codeblocq.com/2015/12/Easy-dynamic-classes-with-React/
  computeClassColor(val){
    return classNames({
      'rating-red': val < 5,
      'rating-orange': val > 4 && val < 8,
      'rating-green': val > 7
    })
  }

  computeCircleColor(val){
    if (val < 5) {
      return '#e7575c'
    } else if (val > 4 && val < 8){
      return '#FED86F'
    } else if (val >= 8) {
      return '#658F2F'
    }
  }

  render(){
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
            <div className="react-wrapper" id="channel">

                <div className="mui-appbar">

                  <table width="100%">
                    <tbody><tr style={{verticalAlign: 'middle'}}>
                        <td className="mui--appbar-height header">Unified Customer Feedback</td>
                        <td className="nav-items" align="right">
                          <Link to="/" className="mui-btn mui-btn--primary">Main Dashboard</Link>
                          <Link to="/channel" className="mui-btn mui-btn--primary active">Channel Dashboard</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="container">

                    <div className="row datepick clearfix">
                      <div className="datepicker col-md-4">

                                    <DatetimeRangePicker
                                      autoApply={true}
                                      autoUpdateInput={false}
                                      dateFormat={'MMM DD YYYY'}
                                      locale={locale}
                                      onApply={this.handleApply}
                                      onCancel={this.handleCancel}
                                      {...pickerProps}
                                    >

                                      <div className="input-group">
                                      <div className="input-group-addon">From:</div>
                                        <input type="text" className="form-control" value={label}/>

                                      </div>
                                    </DatetimeRangePicker>
                                      {/* <Button className="datepick-btn col-md-3" onClick={this.getJSON.bind(this)} disabled={!this.state.startDate || !this.state.endDate} >Go</Button> */}
                        </div>

                      <div className="rating-key col-md-3">

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
                    </div>
                    </div>

                <ResponsiveReactGridLayout layouts={Layouts} margin={[60,40]} cols={{lg: 12, md: 12, sm: 12, xs: 6}} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}} width={1200} isResizable={false}>
                  <div className="grid-item" key={'digital'}>

                      <div className="donut-chart-title">Digital</div>
                      <div className="donut-chart">
                        <div ref="donutRating" className={"donut-rating " + this.computeClassColor(this.state.digitalData.overall_score)}>{this.state.digitalData.overall_score}</div>
                          {/* <VictoryPie animate={{
                             duration: 1000}}
                           innerRadius={80}
                           data={this.state.data}
                           colorScale={[
                           "#d5d5d5",
                           "#F66D3B"]} ></VictoryPie> */}
                           <CircularProgress strokeColor={this.computeCircleColor(this.state.digitalPercentage)}
                           strokeWidth="10"
                           radius="85"
                       percentage={this.state.digitalPercentage}/>

                      </div>
                    <table className="table table-bordered">
                      <thead>
                        <tr className="fb-table-header">
                          <th></th><th>Customer Satisfaction</th><th>Ease of Doing Business</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="col-header" scope="row">Seek</th>
                            <td className={this.computeClassColor(this.state.digitalDataChart[0].customerSatisfaction)}> {this.state.digitalDataChart[0].customerSatisfaction}</td>
                            <td className={this.computeClassColor(this.state.digitalDataChart[0].customerEffor)}>{this.state.digitalDataChart[0].customerEffor}</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Purchase</th>
                            <td className={this.computeClassColor(this.state.digitalDataChart[1].customerSatisfaction)}> {this.state.digitalDataChart[1].customerSatisfaction}</td>
                            <td className={this.computeClassColor(this.state.digitalDataChart[1].customerEffor)}>{this.state.digitalDataChart[1].customerEffor}</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Get Help</th>
                            <td className={this.computeClassColor(this.state.digitalDataChart[2].customerSatisfaction)}> {this.state.digitalDataChart[2].customerSatisfaction}</td>
                            <td className={this.computeClassColor(this.state.digitalDataChart[2].customerEffor)}>{this.state.digitalDataChart[2].customerEffor}</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Optimize</th>
                            <td className={this.computeClassColor(this.state.digitalDataChart[3].customerSatisfaction)}> {this.state.digitalDataChart[3].customerSatisfaction}</td>
                            <td className={this.computeClassColor(this.state.digitalDataChart[3].customerEffor)}>{this.state.digitalDataChart[3].customerEffor}</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Seek (External)</th>
                            <td className={this.computeClassColor(this.state.digitalDataChart[4].customerSatisfaction)}> {this.state.digitalDataChart[4].customerSatisfaction}</td>
                            <td className={this.computeClassColor(this.state.digitalDataChart[4].customerEffor)}>{this.state.digitalDataChart[4].customerEffor}</td>
                        </tr>
                        <tr className="fb-theme-header">
                          <th colSpan="1" className="green-text">Positive Themes</th>
                          <td className="">
                          <table className="fb-theme-text"><tbody>
                            <tr><td>Text</td></tr>
                            <tr><td>Text</td></tr>
                            <tr><td>Text</td></tr></tbody>
                          </table>
                          </td>
                          <td className="">
                          <table className="fb-theme-score"><tbody>
                            <tr><td>Score</td></tr>
                            <tr><td>Score</td></tr>
                            <tr><td>Score</td></tr></tbody>
                          </table>
                          </td>
                        </tr>
                        <tr className="fb-theme-header">
                          <th colSpan="" className="red-text">Negative Themes</th>
                          <td className="">
                          <table className="fb-theme-text"><tbody>
                            <tr><td>Text</td></tr>
                            <tr><td>Text</td></tr>
                            <tr><td>Text</td></tr></tbody>
                          </table>
                          </td>
                          <td className="">
                          <table className="fb-theme-score"><tbody>
                            <tr><td>Score</td></tr>
                            <tr><td>Score</td></tr>
                            <tr><td>Score</td></tr></tbody>
                          </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="grid-item" key={'callCenter'}>

                          <div className="donut-chart-title">Call Center</div>
                          <div className="donut-chart">
                            <div ref="donutRating" className={"donut-rating " + this.computeClassColor(this.state.callCenterData.overall_score)}>{this.state.callCenterData.overall_score}</div>
                              <CircularProgress strokeColor={this.computeCircleColor(this.state.callCenterPercentage)}
                              strokeWidth="10"
                              radius="85"
                              percentage={this.state.callCenterPercentage}/>
                          </div>
                        <table className="table table-bordered">
                          <thead>
                            <tr className="fb-table-header">
                              <th></th><th>Customer Satisfaction</th><th>Ease of Doing Business</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="col-header" scope="row">Seek</th>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[0].customerSatisfaction)}> {this.state.callCenterDataChart[0].customerSatisfaction}</td>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[0].customerEffor)}>{this.state.callCenterDataChart[0].customerEffor}</td>
                            </tr>
                            <tr>
                              <th className="col-header" scope="row">Purchase</th>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[1].customerSatisfaction)}> {this.state.callCenterDataChart[1].customerSatisfaction}</td>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[1].customerEffor)}>{this.state.callCenterDataChart[1].customerEffor}</td>
                            </tr>
                            <tr>
                              <th className="col-header" scope="row">Get Help</th>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[2].customerSatisfaction)}> {this.state.callCenterDataChart[2].customerSatisfaction}</td>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[2].customerEffor)}>{this.state.callCenterDataChart[2].customerEffor}</td>
                            </tr>
                            <tr>
                              <th className="col-header" scope="row">Optimize</th>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[3].customerSatisfaction)}> {this.state.callCenterDataChart[3].customerSatisfaction}</td>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[3].customerEffor)}>{this.state.callCenterDataChart[3].customerEffor}</td>
                            </tr>
                            <tr>
                              <th className="col-header" scope="row">Seek (External)</th>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[4].customerSatisfaction)}> {this.state.callCenterDataChart[4].customerSatisfaction}</td>
                                <td className={this.computeClassColor(this.state.callCenterDataChart[4].customerEffor)}>{this.state.callCenterDataChart[4].customerEffor}</td>
                            </tr>
                            <tr className="fb-theme-header">
                              <th colSpan="1" className="green-text">Positive Themes</th>
                              <td className="">
                              <table className="fb-theme-text"><tbody>
                                <tr><td>Text</td></tr>
                                <tr><td>Text</td></tr>
                                <tr><td>Text</td></tr></tbody>
                              </table>
                              </td>
                              <td className="">
                              <table className="fb-theme-score"><tbody>
                                <tr><td>Score</td></tr>
                                <tr><td>Score</td></tr>
                                <tr><td>Score</td></tr></tbody>
                              </table>
                              </td>
                            </tr>
                            <tr className="fb-theme-header">
                              <th colSpan="" className="red-text">Negative Themes</th>
                              <td className="">
                              <table className="fb-theme-text"><tbody>
                                <tr><td>Text</td></tr>
                                <tr><td>Text</td></tr>
                                <tr><td>Text</td></tr></tbody>
                              </table>
                              </td>
                              <td className="">
                              <table className="fb-theme-score"><tbody>
                                <tr><td>Score</td></tr>
                                <tr><td>Score</td></tr>
                                <tr><td>Score</td></tr></tbody>
                              </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                  </div>
                  <div className="grid-item" key={'inStore'}>

                        <div className="donut-chart-title">In Store</div>
                        <div className="donut-chart">
                          <div ref="donutRating" className={"donut-rating " + this.computeClassColor(this.state.inStoreData.overall_score)}>{this.state.inStoreData.overall_score}</div>
                            <CircularProgress strokeColor={this.computeCircleColor(this.state.inStorePercentage)}
                            strokeWidth="10"
                            radius="85"
                            percentage={this.state.inStorePercentage}/>
                        </div>
                      <table className="table table-bordered">
                        <thead>
                          <tr className="fb-table-header">
                            <th></th><th>Customer Satisfaction</th><th>Ease of Doing Business</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="col-header" scope="row">Seek</th>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[0].customerSatisfaction)}> {this.state.inStoreDataChart[0].customerSatisfaction}</td>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[0].customerEffor)}>{this.state.inStoreDataChart[0].customerEffor}</td>
                          </tr>
                          <tr>
                            <th className="col-header" scope="row">Purchase</th>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[1].customerSatisfaction)}> {this.state.inStoreDataChart[1].customerSatisfaction}</td>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[1].customerEffor)}>{this.state.inStoreDataChart[1].customerEffor}</td>
                          </tr>
                          <tr>
                            <th className="col-header" scope="row">Get Help</th>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[2].customerSatisfaction)}> {this.state.inStoreDataChart[2].customerSatisfaction}</td>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[2].customerEffor)}>{this.state.inStoreDataChart[2].customerEffor}</td>
                          </tr>
                          <tr>
                            <th className="col-header" scope="row">Optimize</th>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[3].customerSatisfaction)}> {this.state.inStoreDataChart[3].customerSatisfaction}</td>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[3].customerEffor)}>{this.state.inStoreDataChart[3].customerEffor}</td>
                          </tr>
                          <tr>
                            <th className="col-header" scope="row">Seek (External)</th>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[4].customerSatisfaction)}> {this.state.inStoreDataChart[4].customerSatisfaction}</td>
                              <td className={this.computeClassColor(this.state.inStoreDataChart[4].customerEffor)}>{this.state.inStoreDataChart[4].customerEffor}</td>
                          </tr>
                          <tr className="fb-theme-header">
                            <th colSpan="1" className="green-text">Positive Themes</th>
                            <td className="">
                            <table className="fb-theme-text"><tbody>
                              <tr><td>Text</td></tr>
                              <tr><td>Text</td></tr>
                              <tr><td>Text</td></tr></tbody>
                            </table>
                            </td>
                            <td className="">
                            <table className="fb-theme-score"><tbody>
                              <tr><td>Score</td></tr>
                              <tr><td>Score</td></tr>
                              <tr><td>Score</td></tr></tbody>
                            </table>
                            </td>
                          </tr>
                          <tr className="fb-theme-header">
                            <th colSpan="" className="red-text">Negative Themes</th>
                            <td className="">
                            <table className="fb-theme-text"><tbody>
                              <tr><td>Text</td></tr>
                              <tr><td>Text</td></tr>
                              <tr><td>Text</td></tr></tbody>
                            </table>
                            </td>
                            <td className="">
                            <table className="fb-theme-score"><tbody>
                              <tr><td>Score</td></tr>
                              <tr><td>Score</td></tr>
                              <tr><td>Score</td></tr></tbody>
                            </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>

                </ResponsiveReactGridLayout>
            </div>

          )
  }
}
export default ChannelDashboard;
