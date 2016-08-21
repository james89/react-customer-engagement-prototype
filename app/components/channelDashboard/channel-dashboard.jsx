import React from 'react';
import { Link } from 'react-router';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';

// const ResponsiveReactGridLayout = ReactGridLayout.Responsive;
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const LayoutLarge = [
  {i: 'digital', x: 0, y: 0, w: 1,  h: 3, maxW: 3},
  {i: 'callCenter', x: 1, y: 0, w: 1, h: 3, maxW: 3},
  {i: 'inStore', x: 2, y: 0, w: 1, h: 3, maxW: 3}
];



const LayoutMedium = [
  {i: 'digital', x: 0, y: 0, w: 2,  h: 3},
  {i: 'callCenter', x: 3, y: 0, w: 2, h: 3},
  {i: 'inStore', x: 6, y: 0, w: 2, h: 3}
];

const LayoutSmall = [
  {i: 'digital', x: 0, y: 0, w: 3,  h: 3, maxW: 3},
  {i: 'callCenter', x: 0, y: 0, w: 3, h: 3, maxW: 3},
  {i: 'inStore', x: 0, y: 0, w: 3, h: 3, maxW: 3}
];

const Layouts = {
  lg: LayoutLarge,
  md: LayoutMedium,
  sm: LayoutSmall,
}

const ChannelDashboard = () => (
  <div className="react-wrapper">

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

      <ResponsiveReactGridLayout layouts={Layouts} margin={[30,30]} cols={{lg: 3, md: 9, sm: 3}} breakpoints={{lg: 1200, md: 996, sm: 768}}>
        <div className="grid-item" key={'digital'}>1</div>
        <div className="grid-item" key={'callCenter'}>2</div>
        <div className="grid-item" key={'inStore'}>3</div>

      </ResponsiveReactGridLayout>
  </div>

)

export default ChannelDashboard;
