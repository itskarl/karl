import React, {useState} from 'react';

const ContactPage = () => {
    const [iconStyle, setIconStyle] = useState(<i className="far fa-envelope"></i>);

    return (
        <>
         <div className="contact-container">
            <div className="large-icon">
                {iconStyle}
            </div>
            <a href="mailto:karlrodulfo@gmail.com" rel="noopener noreferrer" className="contact-button" onMouseOver={() => setIconStyle(<i className="far animated bounceIn fa-envelope-open"></i>)}>
            <i className="far fa-envelope"></i> 
                <div>
                    <p>Email</p>
                    <p>karlrodulfo@gmail.com</p>
                </div>
            </a>
            <a href="https://github.com/itskarl" target="_blank"  rel="noopener noreferrer" className="contact-button" onMouseOver={() => setIconStyle(<i className="fab animated flipInY fa-github-alt"></i>)}>
            <i className="fab fa-github"></i>
                <div>
                    <p>Github</p>
                    <p>github.com/itskarl</p>
                </div>
            </a>
            <a href="https://linkedin.com/in/karlrodulfo" target="_blank"  rel="noopener noreferrer" className="contact-button" onMouseOver={() => setIconStyle(<i className="fab animated flipInX fa-linkedin-in"></i>)}>
            <i className="fab fa-linkedin"></i>   
                <div>
                    <p>LinkedIn</p>
                    <p>linked.com/in/karlrodulfo</p>
                </div>
            </a>
            <a href="https://angel.co/karl-rodulfo" target="_blank"  rel="noopener noreferrer" className="contact-button" onMouseOver={() => setIconStyle(<i className="fab animated tada fa-angellist"></i>)}>
            <i className="fab fa-angellist"></i>   
                <div>
                    <p>angel.co</p>
                    <p>angel.co/karl-rodulfo</p>
                </div>
            </a>
         </div>


         <style> {`
            .contact-container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction:column;
                height: 100%;
               
                position: relative;
                background: url(lines-bg.svg) no-repeat center center /cover;
            }
            .contact-container p, .contact-container i {
                text-decoration: none;
                color: white;
            }
            .contact-container p {
                line-height: 1rem;
                margin: 4px;
                padding-left: .5rem;
            }
            .contact-container p:nth-of-type(2) {
                color: #aad690
              }
            .large-icon {
                position: absolute;
                font-size: 18rem;
                left: 60%;
                bottom: 45%;
                transform: rotate(5deg);
                background: #2f2b4a;
                color: #b3a9d8;
                text-shadow: 0 5px 5px black;
            }
            @media screen and (max-width: 940px ) {
                .large-icon {
                    font-size: 7rem;
                    left: calc(50% - 3.5rem);
                    bottom: calc(50% + 6rem);
                    background: none;
                }
                .contact-container {
                    background: url(lines-bg.svg) no-repeat;
                    padding-top: 9rem;
                    background-position: top -100px right 70%;
                    background-size: cover;
                }
                .contact-button {
                    max-width: 18rem;
                }
        
            }
            .contact-button i {
                padding: 1rem;
                font-size: 2rem;
                cursor: pointer;
            }
            .contact-button {
                width: 22rem;
                background: rgb(53, 72, 112);
                z-index: 1;
                overflow: hidden;
                display: flex;

                transition-duration: .3s;
                margin: 1rem;
                border-radius: 4px;

                height: 4rem;
                align-items: center;
                
                box-shadow: 0 5px 20px 5px #0000006b;
            }
            .contact-button:hover {
                transform: translateY(-2px);
                transition-duration: .3s;
                cursor: pointer;
                background: rgb(79, 101, 148);
                box-shadow: 0 5px 20px 16px #00000021;
            }
            
         `}
         </style>
        </>
    )
}

export default ContactPage