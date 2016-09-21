import React from 'react';

class TextAnalyticsNegativeRow extends React.Component {

  constructor(){
    super()
  }

  render(){
    let themes = this.props.negativeThemes || [{texts:[]}];

    return (
      <div className="row row-eq-height text-analytics white-bg text-analytics-negative">
        <div className="col-md-1 row-header">
          <span className="negative">Negative Themes</span>
        </div>

        <div className="col-md-2">
          <div className="theme-table">
          {

            themes[0].texts.map(function(text){
              return (
                <div className="text-ana-row">
                  <div className="text-ana-theme">{text.message}</div>
                  <div className="text-ana-score">{text.score}</div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="col-md-2">
          <div className="theme-table">
          {

            themes[1].texts.map(function(text){

              return (
                <div className="text-ana-row">
                  <div className="text-ana-theme">{text.message}</div>
                  <div className="text-ana-score">{text.score}</div>
                </div>
              )
            })
          }
          </div>
        </div>

        <div className="col-md-1">
          <div className="theme-table">
          {

            themes[1].texts.map(function(text){

              return (
                <div className="text-ana-row">
                  <div className="text-ana-theme">{text.message}</div>
                  <div className="text-ana-score">{text.score}</div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="col-md-1">
          <div className="theme-table">
          {

            themes[1].texts.map(function(text){

              return (
                <div className="text-ana-row">
                  <div className="text-ana-theme">{text.message}</div>
                  <div className="text-ana-score">{text.score}</div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="col-md-2">
          <div className="theme-table">
          {

            themes[2].texts.map(function(text){

              return (
                <div className="text-ana-row">
                  <div className="text-ana-theme">{text.message}</div>
                  <div className="text-ana-score">{text.score}</div>
                </div>
              )
            })
          }
          </div>
        </div>


      </div>
    )
  }

}

export default TextAnalyticsNegativeRow;
