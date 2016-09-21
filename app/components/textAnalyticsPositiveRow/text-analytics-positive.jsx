import React from 'react';


class TextAnalyticsPositiveRow extends React.Component {
  constructor() {
    super();
  }

  renderThemeCell(theme, index){

  }

  render(){

    let themes = this.props.positiveThemes || [{texts:[]}];
    // let firstThemes = this.props.positiveThemes[0].texts || [{texts:[]}];
      return (
        <div className="row row-eq-height text-analytics white-bg">
          <div className="col-md-1 row-header">
              <span className="positive pos-title">Positive Themes</span>

          </div>
            {/* {   themes.map(function(theme,index){

                  if (index === 1){
                    return (
                      <div className="col-md-1">
                        <div className="theme-table">
                          {theme.texts.map(function(text){
                            return (
                              <div className="text-ana-row">
                                <div className="text-ana-theme">{text.message}</div>
                                <div className="text-ana-score">{text.score}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="col-md-2">
                        <div className="theme-table">
                          {theme.texts.map(function(text){
                            return (
                              <div className="text-ana-row">
                                <div className="text-ana-theme">{text.message}</div>
                                <div className="text-ana-score">{text.score}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    );
                  }
                })
            } */}


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


export default TextAnalyticsPositiveRow;
