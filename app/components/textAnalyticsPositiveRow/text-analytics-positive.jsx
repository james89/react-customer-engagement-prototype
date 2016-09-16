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
              <span className="positive pos-title">Positive Themes</span>

          </div>
            {/* {   themes.map(function(theme,index){

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
                }) } */}

              <div className="col-md-2">
                <div className="theme-table">
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Attitude</div>
                    <div className="text-ana-score">3.69</div>
                  </div>
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Helpfulness</div>
                    <div className="text-ana-score">2.59</div>
                    </div>
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Friendliness</div>
                    <div className="text-ana-score">1.66</div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="theme-table">
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Attitude</div>
                    <div className="text-ana-score">3.69</div>
                  </div>
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Helpfulness</div>
                    <div className="text-ana-score">2.59</div>
                    </div>
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Friendliness</div>
                    <div className="text-ana-score">1.66</div>
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
                    <div className="text-ana-theme">Staff - Attitude</div>
                    <div className="text-ana-score">3.69</div>
                  </div>
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Helpfulness</div>
                    <div className="text-ana-score">2.59</div>
                    </div>
                  <div className="text-ana-row">
                    <div className="text-ana-theme">Staff - Friendliness</div>
                    <div className="text-ana-score">1.66</div>
                  </div>
                </div>
              </div>
        </div>
        )



  }



}


export default TextAnalyticsPositiveRow;
