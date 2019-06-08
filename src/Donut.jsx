import React from 'react';

const Donut = (props) => {

    return (
        <div className="donut-container">
        <div className="donut-data">
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={props.stroke} stroke-width="3" stroke-dasharray={props.ratios} stroke-dashoffset="25"></circle>
            </svg>
            <div className="skill-name">
              {props.skill}
            </div>
        </div>
        <div>
            {props.children}
        </div>

            <style> {
                `
                .donut-container {

                }
                .donut-data {
                    width: 10rem;
                    position: relative
                }
                .donut {
                    width:100%
                }
                .skill-name {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%)
                }
            `}
            </style>
        </div>
    )
}
export default Donut