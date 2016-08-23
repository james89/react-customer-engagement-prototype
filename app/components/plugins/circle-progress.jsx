import React from 'react';

export default class CircularProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const radius = this.props.radius - this.props.strokeWidth / 2;
        const width = this.props.radius * 2;
        const height = this.props.radius * 2;
        const viewBox = `0 0 ${width} ${height}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.props.percentage / 10;

        return (
            <svg
                className="CircularProgress"
                width={this.props.radius * 2}
                height={this.props.radius * 2}
                viewBox={viewBox}>
                <circle
                    className="CircularProgress-Bg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`} />
                <circle
                    className="CircularProgress-Fg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        stroke: this.props.strokeColor
                    }} />

            </svg>
        );
    }
}

CircularProgress.defaultProps = {
    // radius: 50,
    // percentage: 50,
    // strokeWidth: 1
};
