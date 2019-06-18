import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import Donut from './Donut';
import Slider from "react-slick";

const Resume = (props) => {

  const navsettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
  };

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);
  const [openFifth, setOpenFifth] = useState(false);
  const [openSixth, setOpenSixth] = useState(false);
  const customanimation = {
    overlay: 'background-none',
    transitionEnter: 'animated bounceInUp',
    transitionExit: 'animated fadeOutUpBig',
  }

  const customModal = {
    closeButton: {
      background: 'red',
      top: '-.75rem',
      right: '-.75rem',
      background: 'rgb(53, 72, 112)',
      borderRadius: '50%',
      border: '3px solid white',
      color: 'white',
      boxShadow: '-2px 2px 7px 2px #00000085'
    },
    closeIcon: {
      fill: 'white'
    },
    modal: {
      borderRadius: '.5rem',
      padding: '0',
      boxShadow: '0 10px 60px 40px #00000075'
    }

  }
  return (

    <div className={`section-three-content ${props.viewModel}`}>

      {(props.viewModel === 'desktop' || props.viewModel === 'wide') ?
        <>
          <div className=" skills-section">

            <div>
              <div className="section-title languages">Programming</div>
              <div className="donuts-list">
                <Donut stroke='#ffc457' ratios='85 15'
                  skill={
                    <> <i style={{ color: '#ffc457' }} className="devicon-html5-plain"></i><br />HTML</>
                  }>
                  <p>HTML5<br /> Accessibility<br /> SEO</p>
                </Donut>

                <Donut stroke='#4effee' ratios='85 15'
                  skill={
                    <> <i style={{ color: '#4effee' }} className="devicon-css3-plain"></i><br />CSS</>
                  }>
                  <p>CSS3<br /> SASS<br /> Bootstrap<br /> Materialize</p>
                </Donut>

                <Donut stroke='#87c2f7' ratios='75 25'
                  skill={
                    <> <i style={{ color: '#87c2f7' }} className="devicon-javascript-plain"></i><br />Javascript </>
                  }>
                  <p><b>React JS</b><br /> ES6<br /> Angular JS<br />Node</p>
                </Donut>

                <Donut stroke='#ff5572' ratios='60 40'
                  skill={
                    <> <i style={{ color: '#ff5572' }} className="devicon-ruby-plain"></i><br />Ruby</>
                  }>
                  <p>Ruby on Rails</p>
                </Donut>
              </div>
            </div>

            <div>
              <div className="section-title other">Other Skills</div>
              <ul>
                <li style={{ width: '90%' }}><i className="far fa-calendar-check"></i>Project Management</li>
                <li style={{ width: '60%' }}><i className="fas fa-search-plus"></i>SEO Implementation</li>
                <li style={{ width: '65%' }}><i className="fas fa-marker"></i>Copywriting</li>
                <li style={{ width: '70%' }}><i className="devicon-photoshop-plain"></i>Adobe Photoshop</li>
                <li style={{ width: '50%' }}><i className="devicon-illustrator-plain"></i>Adobe Illustrator</li>
                <li style={{ width: '90%' }}><i className="fas fa-sticky-note"></i>Simpsons Trivia</li>
              </ul>
            </div>

          </div>

          <div className="other-section">
            <div className="recent-exp">
              <div className="workexp banner">
                <h2>Work Experience</h2>
              </div>

              <div className="year" style={{ position: 'absolute', top: '1.5rem', left: '.25rem' }}> 2019</div>
              <div className="year" style={{ position: 'absolute', top: 'calc(135% + 3.5rem)', left: '.25rem' }}> 2007</div>
              <div className="timeline"></div>
              <div className="time-bar unpakt"></div>
              <div className="connector-bar unpakt"></div>
              <div className="time-bar discovery"></div>
              <div className="connector-bar discovery"></div>
              <div className="time-bar nbcnews"></div>
              <div className="connector-bar nbcnews"></div>
              <div className="time-bar nbcu"></div>
              <div className="connector-bar nbcu"></div>
              <div className="time-bar sju"></div>
              <div className="connector-bar sju"></div>
              <div className="time-bar nycda"></div>
              <div className="connector-bar nycda"></div>


              <div className="job one" onClick={() => setOpenFirst(true)}>
                <div className="job-info">
                  <div className="job-logo unpakt"> </div>

                  <div>
                    <p className="job-title">FRONT END DEVELOPER</p>
                    <p>Unpakt / '18 - Present</p>
                  </div>
                </div>
                <div>
                  <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                </div>
              </div>

              <div className="job two" onClick={() => setOpenSecond(true)}>
                <div className="job-info">
                  <div className="job-logo discovery">  </div>

                  <div>
                    <p className="job-title">TELEVISION PRODUCER</p>
                    <p>Discovery Channel / '10-'18</p>
                  </div>
                </div>

                <div>
                  <button className="more-info" ><i className="fas fa-plus-circle"></i></button>

                </div>
              </div>


              <div className="job three" onClick={() => setOpenThird(true)}>
                <div className="job-info">
                  <div className="job-logo news">

                  </div>

                  <div>
                    <p className="job-title">NEWS RESEARCHER</p>
                    <p>NBC News / '09-'10</p>
                  </div>
                </div>
                <div>
                  <button className="more-info" ><i className="fas fa-plus-circle"></i></button>

                </div>
              </div>

              <div className="job four" onClick={() => setOpenFourth(true)}>
                <div className="job-info">
                  <div className="job-logo nbc">
                  </div>
                  <div>
                    <p className="job-title">NBC PAGE</p>
                    <p>NBC Studios / '08-'09</p>
                  </div>
                </div>
                <div>
                  <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                </div>
              </div>
            </div>



            <div className="education">
              <div className="schools banner">
                <h2>Education</h2>
              </div>
              <div className="edu one" onClick={() => setOpenFifth(true)}>

                <div className="job-info">
                  <div className="edu-logo nycda">
                  </div>
                  <div>
                    <p className="job-title">NY CODE & DESIGN</p>
                    <p>Software Enigneering</p>
                  </div>
                </div>
                <div>
                  <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                </div>
              </div>


              <div className="edu two" onClick={() => setOpenSixth(true)}>

                <div className="job-info">
                  <div className="edu-logo sju">
                  </div>
                  <div>
                    <p className="school">ST JOHN'S UNIVERSITY</p>
                    <p>B.S. Communications</p>
                  </div>
                </div>
                <div>
                  <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                </div>
              </div>



            </div>
          </div>
        </>
        :
        <div className="slider-mobile">

          <Slider {...navsettings}>

            <div>

              <div>
                <div className="section-title languages">Programming</div>
                <div className="donuts-list">
                  <Donut stroke='#ffc457' ratios='85 15'
                    skill={
                      <> <i style={{ color: '#ffc457' }} className="devicon-html5-plain"></i><br />HTML</>
                    }>
                    <p>HTML5<br /> Accessibility<br /> SEO</p>
                  </Donut>

                  <Donut stroke='#4effee' ratios='85 15'
                    skill={
                      <> <i style={{ color: '#4effee' }} className="devicon-css3-plain"></i><br />CSS</>
                    }>
                    <p>CSS3<br /> SASS<br /> Bootstrap<br /> Materialize</p>
                  </Donut>

                  <Donut stroke='#87c2f7' ratios='75 25'
                    skill={
                      <> <i style={{ color: '#87c2f7' }} className="devicon-javascript-plain"></i><br />Javascript </>
                    }>
                    <p><b>React JS</b><br /> ES6<br /> Angular JS<br />Node</p>
                  </Donut>

                  <Donut stroke='#ff5572' ratios='60 40'
                    skill={
                      <> <i style={{ color: '#ff5572' }} className="devicon-ruby-plain"></i><br />Ruby</>
                    }>
                    <p>Ruby on Rails</p>
                  </Donut>
                </div>
              </div>

            </div>


            <div>
              <div className="skills-section">
                <div className="section-title other">Other Skills</div>
                <ul>
                  <li style={{ width: '90%' }}><i className="far fa-calendar-check"></i>Project Management</li>
                  <li style={{ width: '60%' }}><i className="fas fa-search-plus"></i>SEO Implementation</li>
                  <li style={{ width: '65%' }}><i className="fas fa-marker"></i>Copywriting</li>
                  <li style={{ width: '70%' }}><i className="devicon-photoshop-plain"></i>Adobe Photoshop</li>
                  <li style={{ width: '50%' }}><i className="devicon-illustrator-plain"></i>Adobe Illustrator</li>
                  <li style={{ width: '90%' }}><i className="fas fa-sticky-note"></i>Simpsons Trivia</li>
                </ul>
              </div>
            </div>


            <div >

              <div className="jobs-slide">
                <div className="section-title languages">Work Experience</div>
                <div className="job-mobile" onClick={() => setOpenFirst(true)}>
                  <div className="job-info">
                    <div className="job-logo unpakt"> </div>

                    <div>
                      <p className="job-title">FRONT END DEVELOPER</p>
                      <p>Unpakt</p>
                    </div>
                  </div>
                  <div>
                    <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                  </div>
                </div>


                <div className="job-mobile" onClick={() => setOpenSecond(true)}>
                  <div className="job-info">
                    <div className="job-logo discovery">  </div>

                    <div>
                      <p className="job-title">TELEVISION PRODUCER</p>
                      <p>Discovery Channel</p>
                    </div>
                  </div>

                  <div>
                    <button className="more-info" ><i className="fas fa-plus-circle"></i></button>

                  </div>
                </div>

                <div className="job-mobile" onClick={() => setOpenThird(true)}>
                  <div className="job-info">
                    <div className="job-logo news">

                    </div>

                    <div>
                      <p className="job-title">NEWS RESEARCHER</p>
                      <p>NBC News</p>
                    </div>
                  </div>
                  <div>
                    <button className="more-info" ><i className="fas fa-plus-circle"></i></button>

                  </div>
                </div>

                <div className="job-mobile" onClick={() => setOpenFourth(true)}>
                  <div className="job-info">
                    <div className="job-logo nbc">
                    </div>
                    <div>
                      <p className="job-title">NBC PAGE</p>
                      <p>NBC Studios</p>
                    </div>
                  </div>
                  <div>
                    <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                  </div>
                </div>
              </div>
            </div>


            <div>

              <div className="education">
                <div className="section-title languages">Education</div>
                <div className="edu-mobile" onClick={() => setOpenFifth(true)}>

                  <div className="job-info">
                    <div className="edu-logo nycda">
                    </div>
                    <div>
                      <p className="job-title">NY CODE & DESIGN</p>
                      <p>Software Enigneering</p>
                    </div>
                  </div>
                  <div>
                    <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                  </div>
                </div>

                <div className="edu-mobile" onClick={() => setOpenSixth(true)}>

                  <div className="job-info">
                    <div className="edu-logo sju">
                    </div>
                    <div>
                      <p className="school">ST JOHN'S UNIVERSITY</p>
                      <p>B.S. Communications</p>
                    </div>
                  </div>
                  <div>
                    <button className="more-info" ><i className="fas fa-plus-circle"></i></button>
                  </div>
                </div>

              </div>

            </div>

          </Slider>
        </div>
      }

      <Modal open={openFirst} onClose={() => setOpenFirst(false)} styles={customModal} center classNames={customanimation} animationDuration={1500}>
        <div className="modal-content">
          <div className="modal-top">
            <h2>Front End Developer</h2>
            <p>Unpakt · Nov 2018 - Present</p>
          </div>
          <div className="modal-body">
            <ul>
              <li>Facilitated migration of high traffic e-commerce web application from old frameworks (Ruby on Rails, Angular) to React JS</li>
              <li>Oversees front-end development and creation of multiple apps and features across the growing Unpakt product line.</li>
              <li>Manages product interfaces and makes sure all web apps are optimized for SEO, accessibility, and UI/UX. </li>
              <li> Maintained product quality through regular QA tests and managing bug reports and fixes.</li>

            </ul>
          </div>
        </div>
      </Modal>

      <Modal open={openFourth} onClose={() => setOpenFourth(false)} styles={customModal} center classNames={customanimation} animationDuration={1500}>
        <div className="modal-content">
          <div className="modal-top">
            <h2>NBC Page</h2>
            <p>NBC Universal · 2008-2009</p>
          </div>
          <div className="modal-body">

            <ul>
              <li><b>Guest Relations:</b> Conducted NBC studio tours; facilitated tickets and audience coordination for live tapings of Late Night with Conan O’Brien, Late Night With Jimmy Fallon, and Saturday Night Live</li>

              <li><b> NBC News Media Relations Assistant:</b> Acted as a primary liaison between the NBC News publicity team (Dateline, Meet the Press, Nightly News & TODAY Show) and other media outlets during the 2008 presidential election. Facilitated press requests including creating copy, screen grabs, news clips, and tape dubs</li>

              <li><b> SYFY Marketing Assistant:</b> Conceived, prepared and compiled PowerPoint decks for SYFY clients and the marketing team. Maintained, updated, and managed the SYFY mobile website and its assets. Researched marketing and technology news and wrote copy for the bi-weekly SYFY Signal newsletter</li>

            </ul>
          </div>
        </div>
      </Modal>


      <Modal open={openThird} onClose={() => setOpenThird(false)} styles={customModal} center classNames={customanimation} animationDuration={1500}>
        <div className="modal-content">
          <div className="modal-top">
            <h2>News Researcher</h2>
            <p>NBC News · 2009-2010</p>
          </div>
          <div className="modal-body">

            <ul>
              <li> Provided breaking news updates to producers. Functioned as researcher and primary fact checker for all health-related stories for NBC News TODAY, Dateline, and Nightly News. </li>
              <li>Initiated outreach to interview subjects and conducted pre-interviews for news segments.  </li>
              <li> Managed the schedule, travel, and logistics for NBC Chief Medical Editor, Dr. Nancy Snyderman.</li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal open={openSecond} onClose={() => setOpenSecond(false)} styles={customModal} center classNames={customanimation} animationDuration={1500}
      >
        <div className="modal-content">
          <div className="modal-top">
            <h2>Television Producer</h2>
            <p>Discovery Communications · 2010-2018</p>
          </div>
          <div className="modal-body">
            <span>Development producer with several years experience helping develop and produce original series and specials for Discovery Channel and sister networks (Science, Animal Planet, TLC, Destination America).</span>
            <ul>
              <li>Worked closely with vendors and production companies to keep deliverables on time, on budget, and meeting all editorial requirements. </li>
              <li>Co-produced and project managed seven highly rated specials and nonfiction series across multiple cable networks. </li>
              <li>Responsible for providing background research, finding and managing original on-screen talent, and developing show pitches for senior network executives.  </li>
              <li>Conceived, wrote, and designed all paper treatments and presentation decks for all development projects.</li>
            </ul>
          </div>
        </div>
      </Modal>


      <Modal open={openSixth} onClose={() => setOpenSixth(false)} styles={customModal} center classNames={customanimation} animationDuration={1500}>
        <div className="modal-content">
          <div className="modal-top">
            <h2>St. John's University</h2>
            <p>BS Comminications / Minor in Business</p>
          </div>
          <div className="modal-body">

            <ul>
              <li>Receipient of a free/full four-year scholarship (St. John's Presidential Scholar)</li>
              <li>3.98 GPA</li>
              <li>Graduated Summa Cum Laude</li>
              <li>Graduated Silver Key Recipient (Salutatorian)</li>
            </ul>
          </div>
        </div>
      </Modal>


      <Modal open={openFifth} onClose={() => setOpenFifth(false)} styles={customModal} center classNames={customanimation} animationDuration={1500}>
        <div className="modal-content">
          <div className="modal-top">
            <h2>New York Code & Design</h2>
            <p>Software Engineering Instensive · 2018</p>
          </div>
          <div className="modal-body">

            <ul>
              <li>Graduate of software engineering intensive (bootcamp) focusing on full-stack development. </li>
              <li>Created dynamic web applications using a variety of platforms, frameworks, and languages including: Ruby, Ruby on Rails, Javascript, jQuery, AJAX, HTML5, CSS3, sass, Postgresql, Bootstrap, SQL, Git, and Heroku.</li>
            </ul>
          </div>
        </div>
      </Modal>


      <style jsx> {`
         .section-three {
            background: #2f2b4a;
          }
          .section-three-content.desktop, .section-three-content.wide {
            display:  inline-grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            height: calc(100% - 3rem);
            margin-top: 3rem;
          }
          .section-three-content.tablet, .section-three-content.mobile {
            display: inline;
          }
          .slider-mobile {
            padding: 0 2rem;
          }
          .slider-mobile .slick-dots li.slick-active button:before{
            color: #fff
          }
          .slider-mobile .slick-dots li button:before {
            color: #fff
          }

          .skills-section,
          .recent-exp,
          .work-exp {
            padding: 1rem;
          }
          .skills-section {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }
          .skills-section p {
            margin: 0;
            font-size: .9rem
          }
          .section-right {
            height: 100%
          }
          .other-section {
            display: grid;
            grid-template-rows: 65% 35%;
          }

          .workexp.banner {
            border-left: .2rem solid white;
            position: relative;
            height: 70%;
            margin-left: calc(50% + 12rem);
            margin-top: 12%;
          }
          .workexp.banner h2 {
            transform: rotate(90deg);
            top: 10%;
            transform-origin: bottom left;
            white-space: nowrap;
            font-size: 1.2rem
          }

          
          .schools.banner {
            border-left: .2rem solid white;
            position: relative;
            height: 55%;
            margin-left: calc(50% + 12rem);
            margin-top: 5%;
          }
          .schools.banner h2 {
            transform: rotate(90deg);
            transform-origin: bottom left;
            white-space: nowrap;
            font-size: 1.2rem
          }


          .recent-exp {
            position: relative;
            overflow: visible;
            z-index: 1;
          }
          .education {
            position: relative;
          }
        
          .time-bar {
            position: absolute;
            width: .75rem;
            height: 11.3%;
          }
          .time-bar:after {
            content: '';
            top: 50%;
            width: 2.5rem;
            border: 3px dashed black;
            position: absolute;
            border-width: 3px 0 0 0;
            z-index: -1
          }
          .connector-bar {
            left: 3.5rem;
            width: 50%;
            border-style: dashed;
            border-width: 0 0 3px 3px;
            position: absolute;
          }
          .connector-bar:after {
            border-width: 0 0 0px 3px;
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            z-index: -2;
            left: -6px;
            border-color: #00000026;
            border-style: solid;
            }
          .timeline {
            top: 3rem;
            background: #28253f;
            position: absolute;
            width: .75rem;
            height: 135%;
            box-shadow: 0 8px 15px 10px #00000029;
          }
        
          .time-bar.unpakt {
            top: 3rem;
            background: #4eb4e6;
          }
          .connector-bar.unpakt {
            top: calc(3rem + 5.6%);
            height: calc(14.3% - 3rem);
            border-color: #4eb4e6;
          }
          .time-bar.unpakt:after {
            border-color: #4eb4e6;
          }
        
          .time-bar.discovery {
            background: #26A69A;
            top: calc(3rem + 22.6%);
            height: 79.1%;
          }
          .connector-bar.discovery {
            border-color: #26a69a;
            top: 42%;
            height: calc(20.7% + 3rem);
            border-width: 3px 0 0px 3px;
          }
          .time-bar.discovery:after {
            border-color: #26a69a;
          }
        
          .time-bar.nbcnews {
            background: #d2e1e8;
            top: calc(3rem + 101.7%);
          }
          .connector-bar.nbcnews {
            border-color: #d2e1e8;
            top: 64%;
            height: calc(44% + 3rem);
            border-width: 3px 0 0 3px;
            left: 4rem
          }
          .time-bar.nbcnews:after {
            border-color: #d2e1e8;
            width: 3rem
          }
        
          .time-bar.nbcu {
            background: #5C6BC0;
            top: calc(3rem + 113%);
            height: 11.3%;
          }
          .connector-bar.nbcu {
            border-color: #475fe6;
            top: 86%;
            border-width: 3px 0 0 3px;
            height: calc(33.1% + 3rem);
          }
          .time-bar.nbcu:after {
            border-color: #475fe6;
          }
        
          .time-bar.sju{
            background: #d2392b;
            top: calc(3rem + 124.3%);
            height: 11.3%;
          }
          .connector-bar.sju {
            border-color: #e57373;
            top: 132%;
            border-width: 3px 0 0 3px;
            height: calc(0% + 2.5rem);
          }
          .time-bar.sju:after {
            border-color: #e57373;
          }
        
          .time-bar.nycda {
            height: 7.1%;
            background: #ffcc01;
            top: calc(3rem + 11.3%);
          }
          .connector-bar.nycda {
            height: calc(96.5% - 3rem);
            border-color: #ffcc01;
            top: calc(14.9% + 3rem);
            left: 3rem;
          }
          .time-bar.nycda:after{
            border-color: #ffcc01;
            width: 2rem
          }
        
        
        
          .job, .edu {
            width: 22rem;
            position: absolute;
            background: rgb(53, 72, 112);
            transform: translate(-50%, -50%);
            left: 50%;
            border-radius: 3px;
            display: flex;
            min-width: 10rem;
            align-items: center;
            color: #4FC3F7;
            box-shadow: 0 5px 15px 10px #00000038;
            z-index: 1;
            overflow: hidden;
            justify-content: space-between;
            transition-duration: .3s
          }
          .job:hover, .edu:hover {
            transform: translate(-50%, -52%);
            transition-duration: .3s;
            cursor:pointer;
            background: rgb(56, 76, 119);
            box-shadow: 0 5px 20px 16px #00000021
          }
          .job-logo, .edu-logo {
            width: 4rem;
            height: 4rem;
            margin-right: 1rem;
            background: #26C6DA;
            ${props.viewModel === 'mobile' && 'width:0'}
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
            border-color: #b1ecff;
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
            padding-left: 1.75rem;
          }
          .skills-section li {
            background: #87c2f7;
            margin-bottom: .2rem;
            padding: .25rem .5rem;
            width: 70%;
            color: #252a35;
            border-radius: 1rem  0 0 1rem;
        
          }

          @media screen and (max-width: 500px) {
            .skills-section li {
              display: inline-block;
              margin: .2rem;
              width: auto !important;
              border-radius: 1rem;
              padding-right: 1rem;
              
            }
          }
          .skills-section li:nth-child(odd)  {
            background: #b1e6e1;
          }
          .skills-section li i {
            margin-right: .5rem;
            color:  #283041;
            display: inline !important
          }

          .section-title {
            font-family: Telex;
            color: #fff;
            font-size: 1.3rem;
            background: none;
            font-weight: bold;
            padding-bottom: .5rem;
            margin-bottom: .5rem;
            margin-left: 2rem;
            width: 85%;
          }
          .section-title.other {
            margin-top: 1.5rem;
          }

          .donuts-list {
            display:grid;
            grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
          }
          .donuts-list p {
            color: #e9e9ef;
            padding: 0 1rem;
            text-align: center;
            margin-top: -.5rem;
            margin-bottom: 1rem;
          }
          .donuts-list i {
            font-size: 1.2rem
          }
          .more-info {
            padding: 1rem; 
            font-size: 1.25rem;
            cursor: pointer
          }
          .job-info {
            display: flex;
            justify-content: space-between;
            align-items: center
          }
          .modal-content {
            color: black;
          }
          .modal-top {
            padding: 1.2rem;
            background: rgb(53, 72, 112);
            border-radius: .5rem .5rem 0 0;
          }
          .modal-body {
            padding: 1.2rem; 
            max-width: 500px
          }
          .modal-body li {
            margin-left: -1rem;
            margin-bottom: 1rem;
          }
          .modal-content h2 {
            margin: 0;
            color: rgba(255,255,255,.8);
          }
          .modal-content p {
            margin: 0;
            font-weight: bold;
            color: #4493c1;
          }


        
          .slider-mobile .job-mobile, .slider-mobile .edu-mobile {
            width: 90%;
            max-width: 25rem;
            background: rgb(53, 72, 112);
            border-radius: 3px;
            display: flex;
            box-shadow: 0 3px 10px 5px #0000006b;
            margin: 1rem auto;
            align-items: center;
            color: #4FC3F7;
            z-index: 1;
            overflow: hidden;
            justify-content: space-between;
            transition-duration: .3s;
            position:relative;
            transform: none;
            left: auto;
            height: 4rem;
            cursor: pointer;
            font-size: 14px;
          }
          .job-mobile:hover, .edu-mobile:hover {
            transform: translateY(-2px)
          }
          .job-mobile p, .edu-mobile p {
            margin: 0
          }
          .slider-mobile .slick-track {
            display: flex;
            align-items: center;
            justify-content: center;
          } 
          .slider-mobile .section-title {
            text-align: center;
            margin: 1rem 0;
            width:100%;
            border-bottom: 1px solid #e75ce7;
            padding: 0 0 1rem;
          }
          .slider-mobile .donuts-list {
            grid-template-columns: 1fr 1fr
          }
          .slider-mobile .skills-section {
            padding: 0
          }
          .slider-mobile .slick-track {
            align-items: flex-start;
          }


        `}  </style>

    </div>
  )

};

export default Resume

