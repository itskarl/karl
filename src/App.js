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
        
        navigationPosition={'left'}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state); // eslint-disable-line no-console
          console.log('viewmodel', props.viewModel)
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
                <img className="head-thought" src="1_me.svg" />
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
   height: 50%;
   align-items: flex-end;
   position: relative;
   background: #023e4d;
   background-size: contain;
   overflow: hidden
   }
   .cover-lower {
   height: 50%;
   position: relative;
   overflow: hidden;
   }
   .subtitle {
   text-align: center; 
   font-family: 'Exo', sans-serif;
   color: #fff;
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
      height: ${props.viewModel === 'mobile' ? '100px' : '120px'};
      width: ${props.viewModel === 'mobile' ? '100px' : '120px'};
      background: none;
    }
   .icon-container {
    height: ${props.viewModel === 'mobile' ? '100px' : '120px'};
    width: ${props.viewModel === 'mobile' ? '100px' : '120px'};
    border: 3px solid #005f6c;
    border-radius: 50%;
    position:relative;
    overflow: hidden;
    transition: .3s ease-in-out
   }

   .icon-container:hover {
      transform: scale(1.2, 1.2)
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
   width: 18rem;
   height: 12rem;
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
    background: linear-gradient(#212121,#00232e);
   position: relative;
   }
   .slider-container {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   width: 80%;
   margin: auto;
   }
   .project-square {
   width: 100%;
   display: grid;
   grid-template-columns: 50% 50%
   }
   .project-square img {
   max-width: 100%;
   border: 1rem solid #ebebeb;
   border-width: 1.5rem .25rem .25rem;
   border-radius: .4rem;
   box-shadow: 0 15px 20px 10px #00000057;
   color: black;
   max-height: 320px; 
   margin: auto;
   }
   .project-square a {
   text-decoration: none; 
   line-height: 1; 
   color: rgba(255, 177, 0, 0.9);
   }
   .project-square h4 {
   margin: 0 0 .4rem 0;
   color: #49ffde
   }
   .project-content {
   padding:  0rem 1.5rem 2rem;
   }
   .project-content ul {
     margin-left: -1rem
   }
   .section-two-square {
   position: absolute;
   width: 50%;
   height: 100%;
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

  @media screen and (max-width: 778px) {
    .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        top: calc(6rem + 25%);
    }
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
    .project-square {
      grid-template-columns: 1fr;
      margin-top: 6rem;
      font-size: .8rem;
    }
    .project-square img {
      max-width: 80%
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
