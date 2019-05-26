import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import './App.css';

function App() {
  let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
  };
  let fontMain = 'rgba(255,255,255,.8)'


  return (
    <>

      <Header>
        {window.scrollyY > 1 &&
        <header className="main-header">
          <div className="links">
            <a href="#sectionOne" className="about"><button  >ABOUT</button></a>
            <a href="#sectionTwo" className="work" ><button >WORK</button></a>
            <a href="#sectionThree" className="resume" ><button >RESUME</button></a>
            <a href="#sectionFour" className="contact"><button  >CONTACT</button></a>
            <div className="underline-bar"></div>

          </div>
          <div className="name">

          </div>
        </header>
        }
      </Header>
      <SectionsContainer {...options}>
        <Section>
          <div className="name-holder">
            <div className="name">Karl Rodulfo</div>

            <div className="square s_1"></div>
            <div className="square s_2"></div>
            <div className="square s_3"></div>
            <div className="square s_4"></div>
          </div>
          <div className="cover-lower">
            <div className="subtitle">
              
                Front End Developer with a passion for design, function, and technology. 
            
            </div>
            <div className="menu-container">
              <div className="icon-container"> 
              <img className="icon" src="1_me.svg" />
              <p>ABOUT ME</p>
              </div>
              <div className="icon-container">
              <img className="icon" src="2_work.svg" />
              <p>MY WORK</p>
              </div>
              <div className="icon-container">
              <img className="icon" src="3_resume.svg" />
              <p>RESUME</p>
              </div>
              <div className="icon-container">
              <img className="icon" src="4_contact.svg" />
              <p>CONTACT ME</p>
              </div>
            </div>
          </div>
        </Section>

        
        <Section className="section-two"> Boop</Section>
        <Section className="section-three"> blarp</Section>
        <Section className="section-four"> blarp</Section>
      </SectionsContainer>

      <style>
        {`


          .name {
            font-family: 'Megrim', script;
            font-size: 7.5rem;
            line-height: 7.5rem;
            color: ${fontMain};
            text-align: center;
            text-shadow: 0 3px 5px #222222;
            z-index: 1;
          }
          .name-holder {
            display: flex;
            justify-content: center;
            position: relative;
            height: 50%;
            align-items: flex-end;
            position: relative;
            background: url(background2.png) right bottom no-repeat, #023e4d;
            background-size: contain
          }
          .cover-lower {
            height: 50%;
            position: relative;
          }
          .subtitle {
            text-align: center; 
            font-family: 'Quicksand', sans-serif;
            color: ${fontMain};
            font-weight: 800;
            padding: 1rem;
            font-size: 1.4rem;
          }

          .menu-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 45rem;
            flex-wrap: wrap;
            width: 100%;
            padding: 2rem 0;
            margin: 0 auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .icon-container {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .icon-container p {
            color: ${fontMain};
            font-size: 1.2rem;
            margin: .5rem 0;
          }
          img.icon {
            height: 120px;
            width: 120px;
            background: none;
          }

          .main-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 1rem;
          }
          .links button {
            width: 6rem;
            font-size: 1rem;
            line-height: 1rem;
            padding: .6rem .6rem;
            margin: 0px .4rem;
            border-style: solid;
            border-width: 1px 0;
            border-color: transparent;
            transition-duration: .2s;
          }
          .links button:hover {
            padding: .2rem .6rem;
            margin: .4rem .4rem;
            transition-duration: .2s;
            border-color: #272627;
          }

          .square {
            position: absolute;
            width: 18rem;
            height: 12rem;
            background: pink;
            transform: rotate(45deg)
          }
          .s_1 {
            top: -4rem;
            left: -4rem;
                background: linear-gradient(.25turn, #173e4d,#a4dcb92b);
          }
          .s_2 {
            top: -8rem;
            left:10rem;
                background: linear-gradient(.25turn, #173e4d,#a4dcb92b);
          }
          .s_3 {
            top: 12rem;
            left: -6rem;
                background: linear-gradient(.25turn, #173e4d,#a4dcb92b);
          }
          .s_4 {
            left: 9.25rem;
            top: 9.25rem;
            background: linear-gradient(.25turn,#a4dcb92b, #173e4d);
          }

  



          .section-two {
            background: #37474F
          }
          .section-three {
            background: #4E342E
          }



        `}
      </style>
    </>
  );
}

export default App;
