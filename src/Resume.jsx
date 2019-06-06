import React, { useState } from 'react';
import Modal from 'react-responsive-modal';

const Resume = () => {

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);

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
    }

  }
  return (

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
                <p>Unpakt</p>
              </div>
            </div>
            <div>
              <button className="more-info" ><i class="fas fa-plus-circle"></i></button>
            </div>
          </div>
          <Modal open={openFirst} onClose={() => setOpenFirst(false)} styles={customModal} center >
            <div className="modal-content">
              <div className="modal-top">
                <h2>Front End Developer</h2>
                <p>Unpakt</p>
              </div>
              <div className="modal-body">
                <p>I fleep florps.</p>
                <ul>
                  <li>Do lots of things</li>
                  <li>Do lots of things</li>
                </ul>
              </div>
            </div>
          </Modal>

          <div className="job two" onClick={() => setOpenSecond(true)}>
            <div className="job-info">
              <div className="job-logo discovery">  </div>

              <div>
                <p className="job-title">TELEVISION PRODUCER</p>
                <p>Discovery Channel</p>
              </div>
            </div>

            <div>
              <button className="more-info" ><i class="fas fa-plus-circle"></i></button>

            </div>
          </div>
          <Modal open={openSecond} onClose={() => setOpenSecond(false)} styles={customModal} center >
            <div className="modal-content">
              <div className="modal-top">
                <h2>Television Producer</h2>
                <p>Discovery Communications</p>
              </div>
              <div className="modal-body">
                <p>Development producer with several years experience helping develop and produce original series and specials for Discovery Channel and sister networks (Science, Animal Planet, TLC, Destination America).</p>
                <ul>
                  <li>Worked closely with vendors and production companies to keep deliverables on time, on budget, and meeting all editorial requirements. </li>
                  <li>Co-produced and project managed seven highly rated specials and nonfiction series across multiple cable networks. </li>
                  <li>Found, contacted, and signed over a dozen singularly unique talent to exclusive holding deals for high-level projects in development with Discovery. </li>
                  <li>Responsible for providing background research, finding and managing original on-screen talent, and developing show pitches for senior network executives.  </li>
                  <li>Conceives, writes, and designs all paper treatments and presentation decks for all development projects.</li>
                </ul>
              </div>
            </div>
          </Modal>

          <div className="job three" onClick={() => setOpenThird(true)}>
            <div className="job-info">
              <div className="job-logo news">

              </div>

              <div>
                <p className="job-title">NEWS RESEARCHER</p>
                <p>NBC News</p>
              </div>
            </div>
            <div>
              <button className="more-info" ><i class="fas fa-plus-circle"></i></button>

            </div>
          </div>
          <Modal open={openThird} onClose={() => setOpenThird(false)} styles={customModal} center >
            <div className="modal-content">
              <div className="modal-top">
                <h2>News Researcher</h2>
                <p>NBC News</p>
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

          <div className="job four" onClick={() => setOpenFourth(true)}>
            <div className="job-info">
              <div className="job-logo nbc">
              </div>
              <div>
                <p className="job-title">NBC PAGE</p>
                <p>NBC Studios</p>
              </div>
            </div>
            <div>
              <button className="more-info" ><i class="fas fa-plus-circle"></i></button>
            </div>
          </div>
        </div>
        <Modal open={openFourth} onClose={() => setOpenFourth(false)} styles={customModal} center >
          <div className="modal-content">
            <div className="modal-top">
              <h2>NBC Page</h2>
              <p>NBC Universal</p>
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

      <style> {`
         .section-three {
            background: #2f2b4a;
            font-family: Quicksand
          }
          .section-three-content {
            display:  inline-grid;
            grid-template-columns: 1fr 1.2fr;
            width: 100%;
            height: calc(100% - 3rem);
            margin-top: 3rem;
          }
          .skills-section,
          .recent-exp,
          .work-exp {
            padding: 1rem;
          }
          .skills-section {
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
            background: #44647d;
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
            border-color: #80CBC4;
            top: 42%;
            height: calc(20.7% + 3rem);
            border-width: 3px 0 0px 3px;
          }
          .time-bar.discovery:after {
            border-color: #80CBC4;
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
            border-color: #9FA8DA;
            top: 86%;
            border-width: 3px 0 0 3px;
            height: calc(33.1% + 3rem);
          }
          .time-bar.nbcu:after {
            border-color: #9FA8DA;
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
            width: 20rem;
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
            background: linear-gradient(.25turn, #87c2f7  90%, transparent 91%);
            margin-bottom: .2rem;
            padding: .25rem .5rem;
            width: 70%;
            color: #252a35;
            border-radius: 1rem  0 0 1rem;
            margin-left: -1rem;
          
          }
          .skills-section li:nth-child(odd)  {
            background: linear-gradient(.25turn, #b1e6e1 90%, transparent 91%);
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
        `}  </style>

    </div>
  )

};

export default Resume

