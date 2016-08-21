import React from 'react';
import { Link } from 'react-router';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
import { VictoryPie } from 'victory';
import axios from 'axios';
// const ResponsiveReactGridLayout = ReactGridLayout.Responsive;
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const LayoutLarge = [
  {i: 'digital', x: 0, y: 0, w: 4,  h: 4, maxW: 4},
  {i: 'callCenter', x: 4, y: 0, w: 4, h: 4, maxW: 4},
  {i: 'inStore', x: 8, y: 0, w: 4, h: 4, maxW: 4}
];



const LayoutMedium = [
  {i: 'digital', x: 0, y: 0, w: 4,  h: 5},
  {i: 'callCenter', x: 4, y: 0, w: 4, h: 5},
  {i: 'inStore', x: 8, y: 0, w: 4, h: 5}
];

const LayoutSmall = [
  {i: 'digital', x: 2, y: 0, w: 8,  h: 6},
  {i: 'callCenter', x: 2, y: 0, w: 8, h: 6},
  {i: 'inStore', x: 2, y: 0, w: 8, h: 6}
];
const LayoutXS = [
  {i: 'digital', x: 1, y: 0, w: 6,  h: 7},
  {i: 'callCenter', x: 1, y: 0, w: 6, h: 7},
  {i: 'inStore', x: 1, y: 0, w: 6, h: 7}
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
      data: [
        {x: "", y: 5},
        {x: "", y: 0}
      ]
    }
  }

  componentDidMount(){
    this.setState({
      data: [
        {x: "", y: 5},
        {x: "", y: 5}]
    })
  }

  // http://www.codeblocq.com/2015/12/Easy-dynamic-classes-with-React/
  computeClassColor(val){
    return classNames({
      'rating-red': val < 5,
      'rating-orange': val > 4 && val < 8,
      'rating-green': val > 7
    })
  }

  render(){

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

                <ResponsiveReactGridLayout layouts={Layouts} margin={[60,40]} cols={{lg: 12, md: 12, sm: 12, xs: 6}} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}} width={1200} isResizable={false}>
                  <div className="grid-item" key={'digital'}>

                      <div className="donut-chart-title">Digital</div>
                      <div className="donut-chart">
                        <div className="donut-rating">5</div>
                      <VictoryPie animate={{
                          duration: 1000}}
                        innerRadius={80}
                        data={this.state.data}
                        colorScale={[
                        "#d5d5d5",
                        "#F66D3B"]} >
                      </VictoryPie>
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
                          <td className="rating-green">8</td>
                          <td className="rating-orange">7</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Purchase</th>
                            <td className="rating-red">3</td>
                            <td className="rating-green">9</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Get Help</th><td>Larry</td><td>the Bird</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Optimize</th><td>Larry</td><td>the Bird</td>
                        </tr>
                        <tr>
                          <th className="col-header" scope="row">Seek (External)</th><td>Larry</td><td>the Bird</td>
                        </tr>
                        <tr>
                          <th colSpan="3">Top Positive Themes</th>
                          <tr><td colSpan="3">ljdlfask</td></tr>
                        </tr>
                        <tr>
                          <th colSpan="3">Top Negative Themes</th>
                          <tr><td colSpan="3">ljdlfask</td></tr>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="grid-item" key={'callCenter'}>
                    2
                  </div>
                  <div className="grid-item" key={'inStore'}>
                    3
                  </div>

                </ResponsiveReactGridLayout>
            </div>

          )
  }
}
export default ChannelDashboard;
