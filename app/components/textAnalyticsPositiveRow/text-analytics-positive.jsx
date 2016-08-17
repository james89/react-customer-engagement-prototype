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
        <div className="row row-eq-height text-analytics">
          <div className="col-md-1 row-header"><span>Text Analytics - <span className="positive">Positive Themes</span></span></div>
            {   themes.map(function(theme,index){

                  if (index === 1){
                    return (
                      <div key={theme.phases} className="col-md-4 positive">
                        {theme.text}
                      </div>
                    );
                  } else {
                    return (
                      <div key={theme.phases} className="col-md-2 positive">
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
