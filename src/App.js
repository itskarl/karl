import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import Slider from "react-slick";
import './App.css';

const Karl = () => {
  let options = {
    sectionClassName: 'section',
    anchors: ['home', 'my-work', 'resume', 'sectionFour'],
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

    customPaging: function (i) {
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
            <a href="#home" className="about"><button  >ABOUT</button></a>
            <a href="#my-work" className="work" ><button >WORK</button></a>
            <a href="#resume" className="resume" ><button >RESUME</button></a>
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
                      <h4>MUSINGS: A SOCIAL MEDIA SITE</h4>
                      VISIT SITE
                     </a>
                    <p>A photo & microblogging site where users can create accounts, make posts, and edit their accounts.
                     </p>
                    <p>Built on Ruby on Sinatra</p>
                    <hr />
                    <p>FEATURES: <br />
                      <ul>
                        <li>Simple, lightweight, easy-to-use interface </li>
                        <li>Website is fully responsive for desktop, tablet, and mobile! Please enjoy on different platforms!</li>
                        <li>Utilizes a speech bubble motif for a fun, dynamic, but cohesive style</li>
                        <li>Utilizes SQLite, ActiveRecord</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/MUSINGS-social-media-site" target="_blank"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/pokedex.png" /></div>
                  <div className="project-content">
                    <a href="https://itskarl.github.io/pokemon-pokedex/" target="_blank">
                      <h4>KARL'S POKEMON POKEDEX</h4>
                      VISIT SITE
                     </a>
                    <p>A pokedex that displays pokemon data with vanilla JS and AJAX.
                     </p>
                    <p>Built with Vanilla Javascript</p>
                    <hr />
                    <p>FEATURES: <br />
                      <ul>
                        <li>Simple, lightweight, easy-to-use single-page-application interface. </li>
                        <li>Stats, such as percentage bars are dynamically generated via AJAX.</li>
                        <li>Website is fully responsive for desktop, tablet, and mobile!</li>
                        <li>Built fully on vanilla Javascript, HTML, and CSS</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/pokemon-pokedex" target="_blank"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/afriendinknead.png" /></div>
                  <div className="project-content">
                    <a href="https://afriendinknead.herokuapp.com/" target="_blank">
                      <h4>A FRIEND IN KNEAD</h4>
                      VISIT SITE
                     </a>
                    <p>A full-stack website for fictional bakery A FRIEND IN KNEAD using APIs. <br />
                    </p>
                    <p>Built with Ruby on Sinatra</p>
                    <hr />
                    <p>FEATURES: <br />
                      <ul>
                        <li>Utilizes Eventbrite API to dynamically generate local events </li>
                        <li>Features a festive aesthetic with bakery motifs to highlight the bakery and its products</li>
                        <li>Website is fully responsive for desktop and mobile! Please enjoy on different platforms!</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/Bakery-website-fullstack" target="_blank"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/proj4.png" /></div>
                  <div className="project-content">
                    <a href="https://afacademy.herokuapp.com/" target="_blank">
                      <h4>AF ACADEMY ADMIN PANEL</h4>
                      VISIT SITE
                     </a>
                    <p> A fully functional adminstrative panel for fictional school, Animal Farm Academy. Users can manage students, teachers, classes and cohorts.
                     </p>
                    <p>Built on Ruby on Rails</p>
                    <hr />
                    <p>FEATURES: <br />
                      <ul>
                        <li>Showcases dynamic animation on landing page as a point of interest. Animation built on vanilla Javascript and CSS </li>
                        <li>Designed with very user-friendly interface and visually appealing graphics</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/academy-panel" target="_blank"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="project-square">
                  <div className="project-content"><img src="/images/proj5.png" /></div>
                  <div className="project-content">
                    <a href="https://conciergely.herokuapp.com/" target="_blank">
                      <h4>PLAN MY NIGHT</h4>
                      VISIT SITE
                     </a>
                    <p> Create an evening plan in just one click. Or use the meetup to tool to find the perfect meeting spot for you and a friend.
                     </p>
                    <p>Built on Ruby on Rails</p>
                    <hr />
                    <p>FEATURES: <br />
                      <ul>
                        <li>Utilizes Weather API, Google Maps, Eventbrite, Geocoder, Stripe, and Yelp APIs.</li>
                        <li>Designed with very user-friendly interface and visually appealing graphics</li>
                        <li>Site allows users to save plans easily to quickly share and keep track of plans</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/happymedium" target="_blank"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
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
                    <hr />
                    <p>FEATURES: <br />
                      <ul>
                        <li>Created and sourced data to create my own API and RESTful interface for company ratings</li>
                        <li>Utilizes quagga js barcode reader for quick light-weight front-end information processing</li>
                        <li>Features News API to provide additional information on companies</li>
                      </ul>
                    </p>
                    <a href="https://github.com/itskarl/buyethically" target="_blank"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Section>
        <Section className="section-three">
          <div className="section-three-content">
            <div className=" skills-section">
              <div className="section-title languages">Programming</div>
              <ul>
                <li style={{ width: '90%' }}>
                  <i className="devicon-html5-plain"></i>HTML</li>
                <li style={{ width: '90%' }}><i className="devicon-css3-plain"></i>CSS</li>
                <li style={{ width: '70%' }}><i className="devicon-javascript-plain"></i>Javascript</li>
                <li style={{ width: '60%' }}><i className="devicon-ruby-plain"></i>Ruby</li>

                <li style={{ width: '70%' }}><i className="devicon-react-original"></i>React</li>
                <li style={{ width: '50%' }}><i className="devicon-angularjs-plain"></i>Angular JS</li>
                <li style={{ width: '60%' }}><i className="devicon-rails-plain"></i>Rails</li>

              </ul>

              <div className="section-title other">Other Skills</div>
              <ul>
                <li style={{ width: '90%' }}><i className="far fa-calendar-check"></i>Project Management</li>
                <li style={{ width: '70%' }}><i className="fas fa-search-plus"></i>SEO Implementation</li>
                <li style={{ width: '75%' }}><i className="fas fa-marker"></i>Copywriting</li>
                <li style={{ width: '80%' }}><i className="devicon-photoshop-plain"></i>Adobe Photoshop</li>
                <li style={{ width: '60%' }}><i className="devicon-illustrator-plain"></i>Adobe Illustrator</li>
                <li style={{ width: '90%' }}><i className="fas fa-sticky-note"></i>Simpsons Trivia</li>
              </ul>
            </div>

            <div className="other-section">
              <div className="recent-exp">
                <div className="time-bar unpakt"></div>
                <div className="time-bar discovery"></div>
                <div className="time-bar nbcnews"></div>
                <div className="time-bar nbcu"></div>
                <div className="time-bar sju"></div>
                <div className="time-bar nycda"></div>


                <div className="job one">
                  <div className="job-logo unpakt">

                  </div>
                  <div>
                    <p className="job-title">FRONT END DEVELOPER</p>
                    <p>Unpakt</p>
                  </div>
                </div>
                <div className="job two">
                  <div className="job-logo discovery">

                  </div>
                  <div>
                    <p className="job-title">TELEVISION PRODUCER</p>
                    <p>Discovery Channel</p>
                  </div>
                </div>
                <div className="job three">
                  <div className="job-logo news">

                  </div>
                  <div>
                    <p className="job-title">NEWS RESEARCHER</p>
                    <p>NBC News</p>
                  </div>
                </div>
                <div className="job four">
                  <div className="job-logo nbc">

                  </div>
                  <div>
                    <p className="job-title">NBC PAGE</p>
                    <p>NBC Studios</p>
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="edu one">
                  <div className="edu-logo nycda">
                  </div>
                  <div>
                    <p className="school">NY CODE & DESIGN</p>
                    <p>Software Enigneering Intensive 2018</p>
                  </div>
                </div>

                <div className="edu two">
                  <div className="edu-logo sju">
                  </div>
                  <div>
                    <p className="school">ST JOHN'S UNIVERSITY</p>
                    <p>B.S. Communications</p>
                  </div>
                </div>

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
   background: #023e4d;
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
   align-items: center;
   justify-content: flex-end;
   padding: 1rem;
   height: 3rem;
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
   border-color: #a4dcb9;
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
    background: #4e342e;
    font-family: Quicksand
  }
  .section-three-content {
    display:  inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height:100%
  }
  .skills-section,
  .recent-exp,
  .work-exp {
    padding: 1rem;
  }
  .skills-section {
    background: linear-gradient(.25turn, #566f84, #355976);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section-right {
    height: 100%
  }
  .other-section {
    display: grid;
    grid-template-rows: 65% 35%;
  }
  .recent-exp {
    background: linear-gradient(.25turn, #e7e3d5, #c1d7eb);
    position: relative;
    overflow: visible;
    z-index: 1;
  }
  .education {
    background: steelblue;
    position: relative;
  }

  .time-bar {
    position: absolute;
    width: .5rem;
    height: 11.3%;
    border-radius: .25rem;
  }
  .time-bar.unpakt {
    top: 3rem;
    background: #4eb4e6;;
  }
  .time-bar.nbcnews {
    background: #f6be3e;
    top: calc(3rem + 101.7%);
  }
  .time-bar.discovery {
    background: #3f8a71;
    top: calc(3rem + 11.3%);
    height: 90.4%;
  }
  .time-bar.nbcu {
    background: blue;
    top: calc(3rem + 113%);
    height: 11.3%;

  }
  .time-bar.sju{
    background: pink;
    top: calc(3rem + 124.3%);
    height: 11.3%;
  }



  .job, .edu {
    width: 20rem;
    position: absolute;
    background: rgb(53, 72, 112);
    transform: translateY(-50%);
    left: 5rem;
    border-radius: 3px;
    display: flex;
    min-width: 10rem;
    align-items: center;
    color: #4FC3F7;
    box-shadow: 0 5px 15px 10px #00000038;
  }
  // .job:before ,.edu:before {
  //   content: '';
  //   border-top: 3px solid black;
  //   position: absolute;
  //   width: 4rem;
  //   height: 0;
  //   left: -4rem;
  //   color: black;
  // }
  .job-logo {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    background: #26C6DA
  }
  .job-logo.unpakt {
    background: url(/images/res-unpakt.png) no-repeat center center/cover;
  }
  .job-logo.discovery {
    background: url(/images/res-discovery.jpg) no-repeat center center/cover;
  }
  .job-logo.news{
    background: url(/images/res-nbcnews.png) no-repeat center center/cover;
  }
  .job.three:before {
    border-color: #f6be3e;
    width: 3.5rem;
    left: -3.5rem;
  }
  .job-logo.nbc{
    background: url(/images/res-nbcu.png) no-repeat center center/cover;
  }
  .job.one {
    top: 20%
  }
  .job.two {
    top: 42%
  }
  .job.three {
    top: 64%
  }
  .job.four {
    top: 86%
  }
  .job p, .edu p {
    margin: 0
  }
  .job-title, .school {
    color: white;
  }
  .edu-logo {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    background: #26C6DA
  }
  .edu-logo.sju {
    background: url(/images/res-sju.png) no-repeat center center/cover;
  }
  .edu-logo.nycda {
    background: url(/images/res-code.png) no-repeat center center/cover;
  }
  .edu.one {
    top: 20%;
  }
  .edu.two {
    top: 60%;
    
  }
  
  .skills-section ul {
    list-style-type: none; 
  }
  .skills-section li {
    background: linear-gradient(.15turn, #87c2f7  90%, transparent 91%);
    margin-bottom: .2rem;
    padding: .25rem .5rem;
    width: 70%;
    color: #252a35;
    border-radius: 1rem  0 0 1rem;
    margin-left: -1rem;
  
  }
  .skills-section li:nth-child(odd)  {
    background: linear-gradient(.15turn, #b1e6e1 90%, transparent 91%);
  }
  .skills-section li i {
    margin-right: .5rem;
    color:  #283041;
    display: inline !important
  }
  .section-title {
    font-family: Megrim;
    color: white;
    font-size: 2rem;
    background: none;
    margin-left: -1rem;
    padding-left: 2.5rem;
    font-weight: bold;
  }

  
   `}
      </style>
    </>
  );
}

export default Karl;
