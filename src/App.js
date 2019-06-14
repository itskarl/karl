import React, {  useState, useEffect } from 'react';
import { ScrollToTopOnMount, SectionsContainer, Section, Header } from 'react-fullpage';
import Slider from "react-slick";
import './App.css';
import Resume from './Resume';
import ContactPage from './ContactPage';
import Navigation from './Navigation';
import {useMedia} from './Hooks'



const Karl = () => {
  const viewModel = useMedia(
    ['(min-width: 1440px)', '(min-width: 992px)', '(min-width: 768px)', '(min-width: 1px)'],
    ['wide', 'desktop', 'tablet', 'mobile'],
    'desktop'
  );
  
  let options = {
    sectionClassName: 'section',
    anchors: ['home', 'my-work', 'resume', 'contact', 'about'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
  };

  const [menuOption, setmenuOption] = useState('')

  const navsettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
      return (
        <div>
          <img alt="thumbnail" src={`images/proj${i + 1}.png`} />
        </div>
      );
    },
  };

  let fontMain = 'rgba(255,255,255,.8)'

  
  return (
    <>
      <ScrollToTopOnMount />
      <Header>
        <Navigation />
      </Header>
      <SectionsContainer {...options} >
        <Section>
          <div className="name-holder">
            <div className="name slide-in-bottom">Karl Rodulfo </div>
            <div className="square s_1"></div>
            <div className="square s_2"></div>
            <div className="square s_3"></div>
            <div className="square s_4"></div>
          </div>
          <div className="cover-lower">
            <div className="subtitle">
             Software Developer with a passion for design, function, and technology.
            </div>
            <div className="menu-container">

              <a href="#my-work" onMouseOver={() => setmenuOption('My Work')} onMouseOut={() => setmenuOption('')} className="icon-container">
                <img className="icon" alt="icon" src="2_work.svg" />
              </a>
              <a href="#resume" onMouseOver={() => setmenuOption('Résumé')} onMouseOut={() => setmenuOption('')} className="icon-container">
                <img className="icon" alt="icon" src="3_resume.svg" />
              </a>

              <a href="#about" onMouseOver={() => setmenuOption('About')} onMouseOut={() => setmenuOption('')} className="icon-container">
                <img className="icon" alt="icon" src="1_me.svg" />
              </a>
              <a href="#contact" onMouseOver={() => setmenuOption('Contact')} onMouseOut={() => setmenuOption('')} className="icon-container">
                <img className="icon" alt="icon" src="4_contact.svg" />
              </a>

            </div>
            {menuOption && <div className={`menu-option animated fadeIn`}>
              <p>{menuOption}</p>
            </div>}
          </div>
        </Section>
        <Section className="section-two">
          <div className="section-two-square"></div>

          <div className="slider-container">
            <Slider {...navsettings}>
              <div>
                <div className="project-square">
                  <div className="project-content" ><img alt="site screenshot" src="/images/musings.png" /></div>
                  <div className="project-content">
                    <a href="https://musings1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <h4>MUSINGS: A SOCIAL MEDIA SITE</h4>
                      VISIT SITE
                     </a>
                    <p>A photo & microblogging site where users can create accounts, make posts, and edit their accounts.
                     </p>
                    <p>Built on Ruby on Sinatra</p>
                    <hr />
                    <div>FEATURES: <br />
                      <ul>
                        <li>Simple, lightweight, easy-to-use interface </li>
                        <li>Website is fully responsive for desktop, tablet, and mobile! Please enjoy on different platforms!</li>
                        <li>Utilizes a speech bubble motif for a fun, dynamic, but cohesive style</li>
                        <li>Utilizes SQLite, ActiveRecord</li>
                      </ul>
                    </div>
                    <a href="https://github.com/itskarl/MUSINGS-social-media-site" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img alt="site screenshot" src="/images/pokedex.png" /></div>
                  <div className="project-content">
                    <a href="https://itskarl.github.io/pokemon-pokedex/" target="_blank" rel="noopener noreferrer">
                      <h4>KARL'S POKEMON POKEDEX</h4>
                      VISIT SITE
                     </a>
                    <p>A pokedex that displays pokemon data with vanilla JS and AJAX.
                     </p>
                    <p>Built with Vanilla Javascript</p>
                    <hr />
                    <div>FEATURES: <br />
                      <ul>
                        <li>Simple, lightweight, easy-to-use single-page-application interface. </li>
                        <li>Stats, such as percentage bars are dynamically generated via AJAX.</li>
                        <li>Website is fully responsive for desktop, tablet, and mobile!</li>
                        <li>Built fully on vanilla Javascript, HTML, and CSS</li>
                      </ul>
                    </div>
                    <a href="https://github.com/itskarl/pokemon-pokedex" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img alt="site screenshot" src="/images/afriendinknead.png" /></div>
                  <div className="project-content">
                    <a href="https://afriendinknead.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <h4>A FRIEND IN KNEAD</h4>
                      VISIT SITE
                     </a>
                    <p>A full-stack website for fictional bakery A FRIEND IN KNEAD using APIs. <br />
                    </p>
                    <p>Built with Ruby on Sinatra</p>
                    <hr />
                    <div>FEATURES: <br />
                      <ul>
                        <li>Utilizes Eventbrite API to dynamically generate local events </li>
                        <li>Features a festive aesthetic with bakery motifs to highlight the bakery and its products</li>
                        <li>Website is fully responsive for desktop and mobile! Please enjoy on different platforms!</li>
                      </ul>
                    </div>
                    <a href="https://github.com/itskarl/Bakery-website-fullstack" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img alt="site screenshot" src="/images/proj4.png" /></div>
                  <div className="project-content">
                    <a href="https://afacademy.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <h4>AF ACADEMY ADMIN PANEL</h4>
                      VISIT SITE
                     </a>
                    <p> A fully functional adminstrative panel for fictional school, Animal Farm Academy. Users can manage students, teachers, classes and cohorts.
                     </p>
                    <p>Built on Ruby on Rails</p>
                    <hr />
                    <div>FEATURES: <br />
                      <ul>
                        <li>Showcases dynamic animation on landing page as a point of interest. Animation built on vanilla Javascript and CSS </li>
                        <li>Designed with very user-friendly interface and visually appealing graphics</li>
                      </ul>
                    </div>
                    <a href="https://github.com/itskarl/academy-panel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img alt="site screenshot" src="/images/proj5.png" /></div>
                  <div className="project-content">
                    <a href="https://conciergely.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <h4>PLAN MY NIGHT</h4>
                      VISIT SITE
                     </a>
                    <p> Create an evening plan in just one click. Or use the meetup to tool to find the perfect meeting spot for you and a friend.
                     </p>
                    <p>Built on Ruby on Rails</p>
                    <hr />
                    <div>FEATURES: <br />
                      <ul>
                        <li>Utilizes Weather API, Google Maps, Eventbrite, Geocoder, Stripe, and Yelp APIs.</li>
                        <li>Designed with very user-friendly interface and visually appealing graphics</li>
                        <li>Site allows users to save plans easily to quickly share and keep track of plans</li>
                      </ul>
                    </div>
                    <a href="https://github.com/itskarl/happymedium" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img alt="site screenshot" src="/images/proj6.png" /></div>
                  <div className="project-content">
                    <a href="https://buyinformed.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <h4>CONCON: THE CONSCIENTIOUS CONSUMER TOOL</h4>
                      VISIT SITE
                     </a>
                    <p>Use your mobile device as to read the barcode of a product, and get it's consumer ethical rating.
                     </p>
                    <p>Built on Ruby on Rails</p>
                    <hr />
                    <div>FEATURES: <br />
                      <ul>
                        <li>Created and sourced data to create my own API and RESTful interface for company ratings</li>
                        <li>Utilizes quagga js barcode reader for quick light-weight front-end information processing</li>
                        <li>Features News API to provide additional information on companies</li>
                      </ul>
                    </div>
                    <a href="https://github.com/itskarl/buyethically" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Section>

        <Section className="section-three">
          <Resume />
        </Section>

        <Section className="section-four">
          <ContactPage />
        </Section>

        <Section className="section-five">
          
        </Section>

      </SectionsContainer>
      <style jsx>
        {`
   *:focus {
   outline: none
   }
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
   color: ${fontMain};
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
   color: ${fontMain};
   font-size: 1.2rem;
   margin: .5rem 0;
   }
   img.icon {
    height: 120px;
    width: 120px;
    background: none;
   }

   .icon-container {
    height: 120px;
    width: 120px;
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
    background: linear-gradient(#212121,#2f2b4a);
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
    background: linear-gradient(#271d3a 20%, #023e4d)
  }

  @media screen and (max-width: 778px) {
    .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        top: 55%
    }
    .icon-container {
      margin: 1rem 0
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
    .slick-thumb {
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

  @media screen and (min-width: 750px) {
    .slick-next:before, .slick-prev:before {
      display: none !important
    }
  }
  
   `}
      </style>
    </>
  );
}

export default Karl;
