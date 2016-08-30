import React from 'react';


class TextAnalyticsPositiveRow extends React.Component {
  constructor() {
    super();
  }

  renderThemeCell(theme, index){

  }

  render(){

    let themes = this.props.positiveThemes || [];

      return (
        <div className="row row-eq-height text-analytics white-bg">
          <div className="col-md-1 row-header">
            <span className="sprite sprite-text-ana sprite-left-col">Text Analytics <br/><br/>
              <span className="positive pos-title">Positive Themes</span>
            </span>
          </div>
            {   themes.map(function(theme,index){

                  if (index === 1){
                    return (
                      <div key={theme.phases} className="col-md-4">
                        {theme.text}
                      </div>
                    );
                  } else {
                    return (
                      <div key={theme.phases} className="col-md-2">
                        {theme.text}
                      </div>
                    );
                  }
                }) }
        </div>
        )



  }



}


export default TextAnalyticsPositiveRow;
