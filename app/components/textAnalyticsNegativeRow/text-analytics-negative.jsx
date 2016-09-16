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
          <div className="theme-table">
            <div className="text-ana-row">
              <div className="text-ana-theme">Competitors</div>
              <div className="text-ana-score">-1.23</div>
            </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Discounts and Offers</div>
              <div className="text-ana-score">-1.13</div>
              </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Affordability</div>
              <div className="text-ana-score">-1.23</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="theme-table">
            <div className="text-ana-row">
              <div className="text-ana-theme">Competitors</div>
              <div className="text-ana-score">-1.23</div>
            </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Discounts and Offers</div>
              <div className="text-ana-score">-1.13</div>
              </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Affordability</div>
              <div className="text-ana-score">-1.23</div>
            </div>
          </div>
        </div>

        <div className="col-md-1">
          <div className="theme-table">
            <div className="text-ana-row">
              <div className="text-ana-theme">Text</div>
              <div className="text-ana-score">Score</div>
            </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Text</div>
              <div className="text-ana-score">Score</div>
              </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Text</div>
              <div className="text-ana-score">Score</div>
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <div className="theme-table">
            <div className="text-ana-row">
              <div className="text-ana-theme">Text</div>
              <div className="text-ana-score">Score</div>
            </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Text</div>
              <div className="text-ana-score">Score</div>
              </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Text</div>
              <div className="text-ana-score">Score</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="theme-table">
            <div className="text-ana-row">
              <div className="text-ana-theme">Competitors</div>
              <div className="text-ana-score">-1.23</div>
            </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Discounts and Offers</div>
              <div className="text-ana-score">-1.13</div>
              </div>
            <div className="text-ana-row">
              <div className="text-ana-theme">Affordability</div>
              <div className="text-ana-score">-1.23</div>
            </div>
          </div>
        </div>


      </div>
    )
  }

}

export default TextAnalyticsNegativeRow;
