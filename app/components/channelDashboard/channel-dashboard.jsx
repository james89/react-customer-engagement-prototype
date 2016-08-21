import React from 'react';
import { Link } from 'react-router';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';

// const ResponsiveReactGridLayout = ReactGridLayout.Responsive;
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const LayoutLarge = [
  {i: 'digital', x: 0, y: 0, w: 4,  h: 3, maxW: 4},
  {i: 'callCenter', x: 4, y: 0, w: 4, h: 3, maxW: 4},
  {i: 'inStore', x: 8, y: 0, w: 4, h: 3, maxW: 4}
];



const LayoutMedium = [
  {i: 'digital', x: 0, y: 0, w: 4,  h: 3},
  {i: 'callCenter', x: 4, y: 0, w: 4, h: 3},
  {i: 'inStore', x: 8, y: 0, w: 4, h: 3}
];

const LayoutSmall = [
  {i: 'digital', x: 2, y: 0, w: 8,  h: 3},
  {i: 'callCenter', x: 2, y: 0, w: 8, h: 3},
  {i: 'inStore', x: 2, y: 0, w: 8, h: 3}
];
const LayoutXS = [
  {i: 'digital', x: 1, y: 0, w: 6,  h: 3},
  {i: 'callCenter', x: 1, y: 0, w: 6, h: 3},
  {i: 'inStore', x: 1, y: 0, w: 6, h: 3}
]
const Layouts = {
  lg: LayoutLarge,
  md: LayoutMedium,
  sm: LayoutSmall,
  xs: LayoutXS
}

const ChannelDashboard = () => (
  <div className="react-wrapper" id="channel">

      {/* <div className="mui-appbar">

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
      </div> */}

      <ResponsiveReactGridLayout layouts={Layouts} margin={[60,40]} cols={{lg: 12, md: 12, sm: 12, xs: 6}} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}} width={1200} isResizable={false}>
        <div className="grid-item" key={'digital'}>

          {/*
            DONUT CHART EXAMPLE - USES VICTORY REACT LIBRARY
            http://jsbin.com/wavoya/1/edit?html,css,js,console,output

            DONUT CHART EXAMPLE - USING HIGHCHARTS
            http://fiddle.jshell.net/anshul24mehta/pywn6wwz/

            DONUT CHART EXAMPLE - USING D3
            http://www.reactd3.org/docs/basic/#donut

            */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td>
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

export default ChannelDashboard;
