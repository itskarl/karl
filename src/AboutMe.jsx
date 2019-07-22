import React from 'react';
import Slider from "react-slick";


const AboutMe = (props) => {

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


    return (
        <div>
            <section className="about-me">
               
            <div className="slider-mobile">

<Slider {...navsettings}>

    <div>
        <p>I'm a full-stack developer with a passion for design looking to create elegant, intuitive, web products for companies eager to disrupt their industry. </p>
        <p>I have experience in HTML5, CSS3, Ruby on Rails, Javascript, and many other frameworks and languages. I love the creative challenge of bringing a vision to life, and thrive on creative problem-solving it involves. </p>
    </div>
    <div>                
        <p>After working for the past decade in television production, I saw the media world transform and practically turned on its head. Media was changing, and I wanted to be a part of that, so I took the plunge, switched careers, and become a web developer. I've always had a love for tech and new media, and rather than watch the media world transform while I'm in the sidelines, I wanted to be one of the people shaping its future. </p>
    </div>
    <div>               
         <p>Television and web development aren't entirely unalike; they both involve using creative solutions to bring an idea to life. Moreover, my experience in content generation for television has given me the skills to work adeptly with tight deadlines, and high-stakes & big-budget projects.  And perhaps most importantly, I've learned how to quickly build deep and trusting relationships with partners, peers, and executive leaders. </p>
    </div>
    <div>
        <p>With these strong transferable skills, I believe I can be a huge asset to your team and help in delivering your company's mission and vision. I'm eager to bring my proven abilities in web development, project management, and creative editorial to companies looking to make a mark. </p>
    </div>
</Slider>
</div>

            </section>
            
            <style> {`

                .about-me {
                    color: #e0e8e9;
                    width: 90%;
                    max-width: 800px;
                    background: #397b82;
                    height: 100%;
                    max-height: 600vh;
                    margin: auto;
                    margin-top: -3rem;
                    border-radius: 1rem;
                    position: relative;
                    padding: 1rem 0rem 2rem;
                    box-shadow: 0 10px 20px 10px #00000065;
                    z-index: 2
                }
                .about-me div {
                    // ${(props.viewModel === 'mobile') ? 'overflow: scroll;' : ''}
                    // ${(props.viewModel === 'mobile') ? 'max-height: 50vh' : ''}
                }
                .about-me p {
                    margin: .5rem 0;
                }
                .about-me:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border: 20px solid transparent;
                    border-top-color: #397b82;
                    border-bottom: 0;
                    border-left: 0;
                    margin-left: -10px;
                    margin-bottom: -20px;
                }

            `}
            </style>
        </div>
    )
}

export default AboutMe