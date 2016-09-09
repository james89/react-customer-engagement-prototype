import React from 'react';

class TextAnalyticsNegativeRow extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div className="row row-eq-height text-analytics white-bg">
        <div className="col-md-1 row-header">
          <span className="negative">Negative Themes</span>
        </div>

        <div className="col-md-2">
          <table className="theme-table">
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
          </table>
        </div>
        <div className="col-md-2">
          <table className="theme-table">
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
          </table>
        </div>

        <div className="col-md-1">
          <table className="theme-table">
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
          </table>
        </div>
        <div className="col-md-1">
          <table className="theme-table">
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
          </table>
        </div>
        <div className="col-md-2">
          <table className="theme-table">
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Score</td>
            </tr>
          </table>
        </div>


      </div>
    )
  }

}

export default TextAnalyticsNegativeRow;
