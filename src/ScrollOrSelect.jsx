import React from 'react';

const ScrollorSelect = () => {
    return (
        <div className="scroll-select">
            <div className="scrolling">
                <div className="mouse-container">
                    <div className="scroll-middle animated slideInDown infinite">.</div>
                </div>
                <p>Scroll or Select</p>
            </div>
            
            

            <style> {`
            .mouse-container {
                width: 1.4rem;
                height: 2.2rem;
                border-radius: 1rem;
                border: 2px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 1.5rem;
                overflow: hidden;
                background: none;
                margin: auto;
            }
            .scroll-middle {
                font-size: 2.5rem;
                color: white;
                text-shadow: none; 
            }
            .scroll-select {
                margin:auto;
                display: flex;
                align-items: center;
                color: white;
                justify-content: center;
                margin-top: 10vh;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0)
            }
            .scroll-select p {
                font-size: 1rem;
                line-height: 1rem;
            }

            `}
            </style>
        </div>
        

    )
}

export default ScrollorSelect;