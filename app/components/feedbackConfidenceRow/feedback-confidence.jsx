import React from 'react';
import ReactDOM from 'react-dom';

const Red = React.createClass({
  render(){
    return (<div className="col-md-1"><svg width="28px" height="24px" viewBox="815 0 28 24" version="1.1">
      <defs />
      <g id="Red" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" transform="translate(815.000000, 0.000000)">
        <rect id="Rectangle-9" fill="#D0021B" x="0.921151417" y="11.9144295" width="5.30969886" height="11.7785235" />
        <rect id="Rectangle-9" fill="#D9D9D9" x="11.5405491" y="5.57214765" width="5.30969886" height="17.6677852" />
        <rect id="Rectangle-9" fill="#D9D9D9" x="22.1599468" y="0.13590604" width="5.30969886" height="23.557047" />
      </g>
    </svg></div>);
  }
});

const Green = () => (
  <div className="col-md-1">
    <svg width="27px" height="24px" viewBox="272 0 27 24" version="1.1">
              <g id="Green" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(272.000000, 0.000000)">
                  <rect id="Rectangle-9" fill="#85BC40" x="0.123553931" y="11.9144295" width="5.30969886" height="11.7785235"></rect>
                  <rect id="Rectangle-9" fill="#85BC40" x="10.7429516" y="5.57214765" width="5.30969886" height="17.6677852"></rect>
                  <rect id="Rectangle-9" fill="#85BC40" x="21.3623494" y="0.13590604" width="5.30969886" height="23.557047"></rect>
              </g>
    </svg>
  </div>);

const Yellow = () => (
  <div className="col-md-1">
    <svg width="27px" height="24px" viewBox="0 0 27 24" version="1.1">
        <g id="Yellow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect id="Rectangle-9" fill="#F4CF10" x="0.315991834" y="11.9144295" width="5.30969886" height="11.7785235"></rect>
            <rect id="Rectangle-9" fill="#F4CF10" x="10.9353896" y="5.57214765" width="5.30969886" height="17.6677852"></rect>
            <rect id="Rectangle-9" fill="#DADADA" x="21.5547873" y="0.13590604" width="5.30969886" height="23.557047"></rect>
        </g>
    </svg>
  </div>
);

class FeedbackConfidenceRow extends React.Component {
  constructor(props) {
    super(props);


  }
  createFbNodes(){

    return Object.keys(this.props.fbData).map(function(phase, index, obj){
      if(this.props.fbData[phase]<7){
        return <Red/>;
      } else if (this.props.fbData[phase] >= 7 && this.props.fbData[phase] < 9){
        return <Yellow/>;
      } else if (this.props.fbData[phase] >= 8){
        return <Green/>;
      }
    }, this)


  }
  render () {

    return (
      <div className="row row-eq-height white-bg fb-conf">
        <div className="col-md-1 row-header"><span className="sprite sprite-feedback-conf"></span><span className="row-title">Feedback<br />Confidence</span></div>
        {
          this.createFbNodes()
        }

      </div>
    );
  }
}

export default FeedbackConfidenceRow;
