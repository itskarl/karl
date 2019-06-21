import React from 'react';

const ScrollorSelect = () => {
    return (
        <div className="scroll-select">
            <div className="scrolling">
                <div className="mouse-container">
                    <div className="scroll-middle animated slideInDown infinite">.</div>
                </div>
            </div>
            <div className="or-connector">&nbsp;or&nbsp;</div>
            <div className="hand-click infinite animated pulse">
                <i class="far fa-hand-pointer"></i>
            </div>

            <style> {`
            .mouse-container {
                width: 1.5rem;
                height: 2.5rem;
                border-radius: 1rem;
                border: 3px solid #005f6c;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 1.5rem;
                overflow: hidden
            }
            .scroll-middle {
                font-size: 3rem;
            }
            .scroll-select {
                display: flex;
                align-items: center;
                color: #005f6c;
                margin-top: 10vh;
                width: 8rem;
                justify-content: space-between
            }
            .or-connector {
                font-size: 1rem;
            }
            .hand-click {
                font-size: 2.2rem;
            }

            `}
            </style>
        </div>
        

    )
}

export default ScrollorSelect;