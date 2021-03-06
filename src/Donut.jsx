import React from 'react';

const Donut = (props) => {

    return (
        <div className="donut-container">
        <div className="donut-data">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                <circle className="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke={props.stroke} strokeWidth="3" strokeDasharray={props.ratios} strokeDashoffset="25"></circle>
            </svg>
            <div className="skill-name">
              {props.skill}
            </div>
        </div>
        <div>
            {props.children}
        </div>

            <style jsx> {
                `
                .donut-container {

                }
                .donut-data {
                    width: 10vw;
                    position: relative;
                    margin: auto;
                    min-width: 8rem;
                }
                .donut {
                    width:100%
                }
                .skill-name {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }
            `}
            </style>
        </div>
    )
}
export default Donut