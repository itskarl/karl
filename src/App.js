import React, { useState } from 'react';
import './App.css';
import Resume from './Resume';
import ContactPage from './ContactPage';
import Navigation from './Navigation';
import ReactFullpage from "@fullpage/react-fullpage";
import CoverPage from './CoverPage';
import MyWork from './MyWork';
import AboutMe from './AboutMe';

const Karl = (props) => {

  const [headerName, setHeaderName] = useState('Karl Rodulfo')

  return (
    <>

      <Navigation headerName={headerName} viewModel={props.viewModel} />

      <ReactFullpage
        anchors={['home', 'my-work', 'resume', 'contact', 'about']}
        onLeave={(origin, destination, direction) => {
          // console.log("onLeave event", { origin, destination, direction });
          // console.log(destination.anchor);
          setHeaderName(destination.anchor.replace("-", " "))
        }}
        navigation={true}
        sectionsColor={[]}

        navigationPosition={'left'}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <section className="section section-one">

                <CoverPage viewModel={props.viewModel} fullpageApi={fullpageApi} />
              </section>


              <section className="section section-two">
                <div className="section-two-square"></div>

                <MyWork />
              </section>

              <section className="section section-three">
                <Resume viewModel={props.viewModel} />
              </section>

              <section className="section section-four">
                <ContactPage />
              </section>

              <section className="section section-five">
                <AboutMe viewModel={props.viewModel} />
                <img alt="person head illustration" className="head-thought" src="1_me.svg" />
              </section>


              <style jsx>
                {`
   *:focus {
   outline: none
   }
   .name {
   font-family: 'Megrim', script;
   font-size: 7.5rem;
   line-height: 7.5rem;
   color: #fff;
   text-align: center;
   text-shadow: 0 3px 5px #222222;
   z-index: 1;
   }
   .name-holder {
   display: flex;
   justify-content: center;
   position: relative;
   height: 43%;
   align-items: flex-end;
   position: relative;
   background: #023e4d;
   background-size: contain;
   overflow: hidden
   }
   .cover-lower {
   height: 57%;
   position: relative;
   overflow: hidden;
   }
   .subtitle {
   text-align: center; 
   font-family: 'Exo', sans-serif;
   color: #fff;
   padding: .25rem;
   font-size: 1.4rem;
   }
   .menu-container {
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   width: 100%;
   margin: 1rem auto;
   position: absolute;
   top: 45%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: center;
   }
   .menu-container p {
     margin: 0
   }
   .menu-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 45rem;
    position: absolute;
    top: calc(45% + 6rem);
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Megrim', script;
    font-size: 2rem;
   }
   .icon-container p {
   color: #fff;
   font-size: 1.2rem;
   margin: .5rem 0;
   }

    img.icon {
      height: ${props.viewModel === 'mobile' ? '70px' : '120px'};
      width: ${props.viewModel === 'mobile' ? '70px' : '100px'};
      background: none;
      
    }
   .icon-container {
    width: 25vw;
    background: linear-gradient(#023e4d, #1d585f);
    position:relative;
    overflow: hidden;
    transition: .3s ease-in-out;
    filter: hue-rotate(10deg) grayscale(60%);
    display: flex;
    justify-content: center;
    border: 2px solid #212121;
   }

   .icon-container:hover {
      transform: translate(0, -3px);
      z-index: 100;
      filter: hue-rotate(0deg) grayscale(0%);
   }

   .icon-container:after {
    z-index: -1;
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right, 
      rgba(255, 255, 255, 0.0) 0%,
      rgba(255, 255, 255, 0.0) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0.0) 100%
    );
  }
  
  .icon-container:hover:after {
    opacity: .8;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  
  .icon-container:active:after {
    opacity: 0;
  }


   .square {
   position: absolute;
   width: 36rem;
   height: 24rem;
   transform: rotate(45deg)
   }
   .s_1 {
   top: -8rem;
   left: -8rem;
   background: linear-gradient(.25turn, #173e4d,#a4dcb92b);
   }
   .s_2 {
   top: -16rem;
   left: 20rem;
   background: linear-gradient(.25turn, #173e4d,#a4dcb92b);
   }
   .s_3 {
   top: 24rem;
   left: -12rem;
   background: linear-gradient(.25turn, #173e4d,#a4dcb92b);
   }
   .s_4 {
   left: 18.5rem;
   top: 18.5rem;
   background: linear-gradient(.25turn,#a4dcb92b, #173e4d);
   }
  .s_5 {
    left: 14.5rem;
    top: 50.25rem;
    background: linear-gradient(.25turn,#a4dcb92b, #173e4d);
  }

   .section-two {
    background: linear-gradient(#212121,#00232e);
    position: relative;
    margin-top: ${props.viewModel === 'mobile' || props.viewModel === 'tablet' ? '6rem' : '3rem'}
   }
   .slider-container {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   width: 80%;
   margin: auto;
   background: #47585b87;
   border-radius: 10px;
   background: linear-gradient(90deg, #00525d 50%, #ffffff00 50%);
   border-radius: 1rem;
   border: 2px solid #008c9f;
   }
   .project-square {
   width: 100%;
   display: grid;
   grid-template-columns: 50% 50%
   }
   .project-square img {
   max-width: 100%;
   border-radius: .4rem;
   color: black;
   max-height: 320px; 
   margin: 0
   }
   .project-square a {
   text-decoration: none; 
   line-height: 1; 
   color: rgba(255, 229, 109, 0.9)
   }
   .project-square h4 {
   margin: 0 0 .4rem 0;
   color: #008c9f
   }
   .project-content {
   padding:  1rem 2rem;
   color: white;
   }
   .project-content ul {
     margin-left: -1rem
   }
   .section-two-square {
   position: absolute;
   width: 50%;
   height: 100%;
   }
   .section-two .slick-slide {
     border-top: 1rem solid #008c9f;
     border-radius: 10px;
   }
   .project-square.one {
   background: url("/images/proj1.png"), #37474f;
   background-size: cover;
   }
   .project-square.two {
   background: url("/images/proj2.png"), #37474f;
   background-size: cover;
   }
   .project-square.three {
   background: url("/images/proj3.png"), #37474f;
   background-size: cover;
   }
   .project-square.four {
   background: url("/images/proj4.png"), #37474f;
   background-size: cover;
   }
   .project-square.five {
   background: url("/images/proj5.png"), #37474f;
   background-size: cover;
   }
   .project-square.six {
   background: url("/images/proj6.png"), #37474f;
   background-size: cover;
   }

  .section-four {
    background: linear-gradient(#2f2b4a 70%, #271d3a);
    overflow: hidden;
  }

  .section-five {
    background: linear-gradient(#271d3a 20%, #023e4d);
    position: relative;
    overflow: hidden
  }

  .head-thought {
    width: 20rem;
    margin: auto;
    position: absolute;
    bottom: -12rem;
    display: block;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 0;

  }

  @media screen and (max-width: 500px) {

    .icon-container {
      margin: 5vh 0 .25rem
    }
    .name-holder {
      height: 35%
    }
    .cover-lower {
      height: 65%
    }
    .name {
      font-size: 3rem; 
      line-height: 3rem;
    }
    .subtitle {
      font-size: 1rem;
    }
    
  }

  @media screen and (max-width: 750px) { 
    .section-two .slick-thumb {
      display: none !important;
    }
    .slider-container {
      background: #ffffff00
    }
    .project-square {
      grid-template-columns: 1fr;
      font-size: .8rem;
    }
    .project-content {
      padding: 1rem;
    }
  }


  .slick-next:before {
    content: url(right-arrow.svg);
    width: 24px; 
    height: 30px;
  }
  .slick-prev:before {
    content: url(left-arrow.svg);
    width: 24px; 
    height: 30px;
  }
  @media screen and (min-width: 750px) {
    .section-two .slick-next:before, .section-two .slick-prev:before {
      display: none !important
    }
  }

  #fp-nav {
    display: ${(props.viewModel === 'mobile' || props.viewModel === 'tablet') ? 'none' : ''}
  }

  #fp-nav ul li a span {
    background: #fff
  }

  .hide-in-mobile {
    ${props.viewModel === 'mobile' ? 'display: none' : ''}
  }
  
   `}
              </style>
            </>




          );
        }}
      />
    </>

  );
}




export default Karl;
