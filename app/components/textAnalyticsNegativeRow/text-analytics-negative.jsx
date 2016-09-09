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
        <div className="col-md-2">Competitors, Discounts and Offers, Affordability for Price</div>
        <div className="col-md-4">Competitors, Discounts and Offers, Affordability for Price</div>
        <div className="col-md-2">Competitors, Discounts and Offers, Affordability for Price</div>
      </div>
    )
  }

}

export default TextAnalyticsNegativeRow;
