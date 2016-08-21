import React from 'react';
import { Link } from 'react-router';

const ChannelDashboard = () => (
  <div className="react-wrapper">

      <div className="mui-appbar">
        {/* content */}
        <table width="100%">
          <tbody><tr style={{verticalAlign: 'middle'}}>
              <td className="mui--appbar-height header">Unified Customer Feedback</td>
              <td className="nav-items" align="right">
                <Link to="/" className="mui-btn mui-btn--primary">Main Dashboard</Link>
                <Link to="/channel" className="mui-btn mui-btn--primary active">Channel Dashboard</Link>


              </td>
            </tr>
          </tbody></table>
      </div>
  </div>

)

export default ChannelDashboard;
