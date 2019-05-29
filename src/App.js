import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import Slider from "react-slick";
import './App.css';

const Karl = () => {
  let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
  };

  const navsettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
 
    customPaging: function(i) {
      return (
        <a>
          <img src={`images/proj${i + 1}.png`} />
        </a>
      );
    },
  };

  let fontMain = 'rgba(255,255,255,.8)'


  return (
    <>
      <Header>
        
        <div className="main-header">
          <div className="links">
            <a href="#sectionOne" className="about"><button  >ABOUT</button></a>
            <a href="#sectionTwo" className="work" ><button >WORK</button></a>
            <a href="#sectionThree" className="resume" ><button >RESUME</button></a>
            <a href="#sectionFour" className="contact"><button  >CONTACT</button></a>
            <div className="underline-bar"></div>

          </div>

        </div>
        
      </Header>
      <SectionsContainer {...options} >
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

        
        <Section className="section-two"> 
          <div className="section-two-square"></div>
          <div className="work-title name">Work</div>
          <div className="slider-container">
            <Slider {...navsettings}>
              <div>
                <div className="project-square">
                  <div className="project-content" ><img src="/images/musings.png" /></div>
                  <div className="project-content">
                    <a href="https://musings1.herokuapp.com/" target="_blank">
                      <h4>MUSINGS: A SOCIAL MEDIA SITE</h4> VISIT SITE
                    </a>
                    <p>A photo & microblogging site where users can create accounts, make posts, and edit their accounts.
                    </p>
                    <p>Built on Ruby on Sinatra</p>
                    <hr />
                    <p>FEATURES: <br/>
                      <ul>
                        <li>Simple, lightweight, easy-to-use interface </li>
                        <li>Website is fully responsive for desktop, tablet, and mobile! Please enjoy on different platforms!</li>
                        <li>Utilizes a speech bubble motif for a fun, dynamic, but cohesive style</li>
                        <li>Utilizes SQLite, ActiveRecord</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/MUSINGS-social-media-site" target="_blank"><i class="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>  
                </div>
              </div>

              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/pokedex.png" /></div>
                  <div className="project-content">
                   <a href="https://itskarl.github.io/pokemon-pokedex/" target="_blank">
                      <h4>KARL'S POKEMON POKEDEX</h4> VISIT SITE
                    </a>
                    <p>A pokedex that displays pokemon data with vanilla JS and AJAX. 
                    </p>
                    <p>Built with Vanilla Javascript</p>
                    <hr />
                    <p>FEATURES: <br/>
                      <ul>
                        <li>Simple, lightweight, easy-to-use single-page-application interface. </li>
                        <li>Stats, such as percentage bars are dynamically generated via AJAX.</li>
                        <li>Website is fully responsive for desktop, tablet, and mobile!</li>
                        <li>Built fully on vanilla Javascript, HTML, and CSS</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/pokemon-pokedex" target="_blank"><i class="fab fa-github"></i>&nbsp; GITHUB</a>

                  </div>
                </div>
              </div>

              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/afriendinknead.png" /></div>
                  <div className="project-content">
                  <a href="https://afriendinknead.herokuapp.com/" target="_blank">
                      <h4>A FRIEND IN KNEAD</h4> VISIT SITE
                    </a>
                    <p>A full-stack website for fictional bakery A FRIEND IN KNEAD using APIs. <br/> 
                    </p>
                    <p>Built with Ruby on Sinatra</p>
                    <hr/>
                    <p>FEATURES: <br />
                      <ul>
                        <li>Utilizes Eventbrite API to dynamically generate local events </li>
                        <li>Features a festive aesthetic with bakery motifs to highlight the bakery and its products</li>
                        <li>Website is fully responsive for desktop and mobile! Please enjoy on different platforms!</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/Bakery-website-fullstack" target="_blank"><i class="fab fa-github"></i>&nbsp; GITHUB</a>

                  </div>
                </div>
              </div>

              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/proj4.png" /></div>
                  <div className="project-content">
                  <a href="https://afacademy.herokuapp.com/" target="_blank">
                    <h4>AF ACADEMY ADMIN PANEL</h4> VISIT SITE
                  </a>
                  <p> A fully functional adminstrative panel for fictional school, Animal Farm Academy. Users can manage students, teachers, classes and cohorts.
                  </p>
                  <p>Built on Ruby on Rails</p>
                  <hr/>
                  <p>FEATURES: <br/>
                    <ul>
                      <li>Showcases dynamic animation on landing page as a point of interest. Animation built on vanilla Javascript and CSS </li>
                      <li>Designed with very user-friendly interface and visually appealing graphics</li>
                    </ul>
                  </p>
                  <a href="https://github.com/itskarl/academy-panel" target="_blank"><i class="fab fa-github"></i>&nbsp; GITHUB</a>

                  </div>
                </div>
              </div>

              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/proj5.png" /></div>
                  <div className="project-content">

                  <a href="https://conciergely.herokuapp.com/" target="_blank">
            <h4>PLAN MY NIGHT</h4> VISIT SITE
          </a>
          <p> Create an evening plan in just one click. Or use the meetup to tool to find the perfect meeting spot for you and a friend. 
          </p>
          <p>Built on Ruby on Rails</p>
          <hr/>
          <p>FEATURES: <br/>
            <ul>
              <li>Utilizes Weather API, Google Maps, Eventbrite, Geocoder, Stripe, and Yelp APIs.</li>
              <li>Designed with very user-friendly interface and visually appealing graphics</li>
              <li>Site allows users to save plans easily to quickly share and keep track of plans</li>

            </ul>
          </p>
          <a href="https://github.com/itskarl/happymedium" target="_blank"><i class="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/proj6.png" /></div>
                  <div className="project-content">
                  <a href="https://buyinformed.herokuapp.com/" target="_blank">
            <h4>CONCON: THE CONSCIENTIOUS CONSUMER TOOL</h4>
            VISIT SITE
          </a>
          <p>Use your mobile device as to read the barcode of a product, and get it's consumer ethical rating. 
          </p>
          <p>Built on Ruby on Rails</p>
          <hr/>
          <p>FEATURES: <br/>
            <ul>

              <li>Created and sourced data to create my own API and RESTful interface for company ratings</li>
              <li>Utilizes quagga js barcode reader for quick light-weight front-end information processing</li>
              <li>Features News API to provide additional information on companies</li>
            </ul>
          </p>
          <a href="https://github.com/itskarl/buyethically" target="_blank"><i class="fab fa-github"></i>&nbsp; GITHUB</a>


                  </div>
                </div>
              </div>
              
            </Slider>
          </div>
        </Section>

        
        
        <Section className="section-three"> 
          <div className="section-three-content">
            <div className="skills-section">
              skillls
            </div>
            <div className="other-section">
              <div className="recent-exp">
                  top
                  asdasdj
                  asdasda<br />
                  asdasd
              </div>
              <div className="work-exp">
                  bottom
              </div>
            </div>

          </div>
        </Section>
        
        
        <Section className="section-four"> blarp</Section>
      </SectionsContainer>

      <style>
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
            cursor: pointer;
          }
          .links button:hover {
            padding: .2rem .6rem;
            margin: .4rem .4rem;
            transition-duration: .2s;
            border-color: #b1d5be;
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
            background: #37474F;
            position: relative;
          }
          .work-title {
            position: absolute;
            top: 60%;
            margin-left: -11vw;
            transform: rotate(-90deg);
            font-size: 10vw;
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
            grid-template-columns: 1fr 1fr
          }
          .project-square img {
            width:100%
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
          .section-two-square {
            position: absolute;
            width: 40%;
            height: 100%;
            background: linear-gradient(#37474f, #0a2837);
            left: 10%;
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
          

          .section-three {
            background: #4E342E;
          }
          .section-three-content {
            margin-top: 4rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .skills-section, .recent-exp, .work-exp {
            padding: 1rem
          }
          .skills-section {
            height: 100%;
            background: beige;
          }
          .other-section {
            grid-template-rows: 50% 50%;
          }
          .recent-exp {
            background: teal
          }
          .work-exp {
            background: steelblue
          }


        `}
      </style>
    </>
  );
}

export default Karl;
