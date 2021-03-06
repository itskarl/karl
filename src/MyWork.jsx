import React from 'react';
import Slider from "react-slick";

const MyWork = () => {
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
return (
<div className="slider-container">
              <Slider {...navsettings}>
              <div>
                  <div className="project-square">
                    <div className="project-content" ><img alt="site screenshot" src="/images/findinbetween.png" /></div>
                    <div className="project-content">
                      <a href="https://meetinbetween.netlify.com/" target="_blank" rel="noopener noreferrer">
                        <h4>MEET IN BETWEEN</h4>
                        VISIT SITE </a>| Built in React
                      <p className="hide-in-mobile">Dinner? Coffee Meeting? Date? This single page app finds an ideal meeting spots between you and a friend. 
                     </p>
                      
                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Utilizes Yelp and Google Maps API to generate key map points and location info.</li>
                          <li>Fully responsive and built and designed mobile-first.</li>
                        </ul>
                      </div>
                      <a href="https://github.com/itskarl/plan-roulette" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="project-square">
                    <div className="project-content" ><img alt="site screenshot" src="/images/musings.png" /></div>
                    <div className="project-content">
                      <a href="https://musings1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h4>MUSINGS: A SOCIAL MEDIA SITE</h4>
                        VISIT SITE </a>| Built on Ruby on Sinatra
                     
                      <p className="hide-in-mobile">A photo & microblogging site where users can create accounts, make posts, and edit their accounts.
                     </p>
                      
                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Simple, lightweight, and fully responsive for desktop, tablet, and mobile.</li>
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
                        VISIT SITE </a>| Built with Vanilla Javascript
                     
                      <p className="hide-in-mobile">A pokedex that displays pokemon data with vanilla JS and AJAX.
                     </p>
         
                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Simple, lightweight, easy-to-use single-page-application interface </li>
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
                        VISIT SITE </a>| Built with Ruby on Sinatra
                     
                      <p className="hide-in-mobile">A full-stack website for fictional bakery A FRIEND IN KNEAD using APIs. <br />
                      </p>
                
                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Utilizes Eventbrite API to dynamically generate local events </li>
                          <li>Features a festive aesthetic with bakery motifs</li>
                          <li>Fully responsive for desktop and mobile! Please enjoy on different platforms!</li>
                        </ul>
                      </div>
                      <a href="https://github.com/itskarl/Bakery-website-fullstack" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="project-square">
                    <div className="project-content"><img alt="site screenshot" src="/images/proj5.png" /></div>
                    <div className="project-content">
                      <a href="https://afacademy.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h4>AF ACADEMY ADMIN PANEL</h4>
                        VISIT SITE</a> | Built on Ruby on Rails
                     
                      <p className="hide-in-mobile"> A fully functional adminstrative panel for fictional school, Animal Farm Academy.
                     </p>

                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Comprehensive admin panel where users can manage students, teachers, classes and cohorts</li>
                          <li>Showcases dynamic animation on landing page as a point of interest. Animation built on vanilla Javascript and CSS </li>
                        </ul>
                      </div>
                      <a href="https://github.com/itskarl/academy-panel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <div className="project-square">
                    <div className="project-content"><img alt="site screenshot" src="/images/proj5.png" /></div>
                    <div className="project-content">
                      <a href="https://conciergely.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h4>PLAN MY NIGHT</h4>
                        VISIT SITE
                     </a>
                      <p className="hide-in-mobile"> Create an evening plan in just one click. Or use the meetup to tool to find the perfect meeting spot for you and a friend.
                     </p>
                      <p>Built on Ruby on Rails</p>
                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Utilizes Weather API, Google Maps, Eventbrite, Geocoder, Stripe, and Yelp APIs</li>
                          <li>Designed with very user-friendly interface and visually appealing graphics</li>
                          <li>Site allows users to save plans easily to quickly share and keep track of plans</li>
                        </ul>
                      </div>
                      <a href="https://github.com/itskarl/happymedium" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                    </div>
                  </div>
                </div> */}
                <div>
                  <div className="project-square">
                    <div className="project-content"><img alt="site screenshot" src="/images/proj6.png" /></div>
                    <div className="project-content">
                      <a href="https://buyinformed.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h4><span className="hide-in-mobile">CONCON: THE </span>CONSCIENTIOUS CONSUMER TOOL</h4>
                        VISIT SITE</a> | Built on Ruby on Rails
                     
                      <p className="hide-in-mobile">Use your mobile device's camera as a barcode reader to get a product's "ethical-ness" rating.
                     </p>
                      
                      
                      <div>FEATURES: <br />
                        <ul>
                          <li>Created and sourced data to create my own API and RESTful interface for company ratings</li>
                          <li>Features News API to provide additional information on companies</li>
                        </ul>
                      </div>
                      <a href="https://github.com/itskarl/buyethically" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp; GITHUB</a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
)
}

export default MyWork