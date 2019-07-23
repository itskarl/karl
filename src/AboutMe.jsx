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

                        <div className="about-box">
                            <p>I'm a developer, artist, nerd, and media maven. I want to create elegant, intuitive, web products for companies eager to disrupt their industry. </p>
                            <p>In my past life, I was a television producer, so even in my previous career, I was bringing a vision to life. I thrive on creative problem-solving. </p>
                        </div>
                        <div className="about-box">
                            <div className=" external-link-container">
                            <a href="http://www.karlrodulfo.me" target="_blank"><img className="about-image" src="images/tv.jpg" /></a>
                            <div>
                                <h4><a href="http://www.karlrodulfo.me" target="_blank">TELEVISION</a></h4>
                                <p> In my past life, I worked as a television producer. I created and developed original documentary and reality content for Discovery and Animal Planet for several years. See some of my past work here. </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-box">
                            <div className=" external-link-container">
                            <a href="http://www.instagram.com/comicswithak" target="_blank"><img className="about-image" src="images/comic.png" /></a>
                            <div>
                                <h4><a href="http://www.instagram.com/comicswithak" target="_blank">WEBCOMIC</a></h4>
                                <p> I'm a hobby cartoonist and I maintain, write, and draw my own comic series in my free time. I launched a webcomic in May 2018, and quickly garnered several thousand followers. Check them out!</p>
                                </div>

                            </div>
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
                    max-height: 60vh;
                    margin: auto;
                    margin-top: -3rem;
                    border-radius: .5rem;
                    position: relative;
                    padding: 1rem 0rem 2rem;
                    box-shadow: 0 10px 20px 10px #00000065;
                    z-index: 2
                }
                .about-box {
                    padding: 1rem;
                     ${(props.viewModel === 'mobile') ? 'max-height: 50vh' : ''}
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
                .about-me h4 {
                    margin: 0 0 .5rem;
                    color: #bde51a
                }
                img.about-image {
                    width: 150px;
                    margin: 0 1rem;
                    border-radius: .5rem;
                    box-shadow: 0 0 11px 1px #0000008f
                }
                .external-link-container {
                    display: flex;
                }
                @media screen and (max-width: 675px) {
                    .about-me {
                        width: 95%
                    }
                    .external-link-container {
                        flex-direction: column;
                        align-items: center;
                    }
                    img.about-image {
                        width: 100%;
                        margin: 0 0 1rem 0;
                        height: 70px;
                        object-fit: cover;
                    }
                    .about-me p {
                        font-size: .9rem
                    }
                }

            `}
            </style>
        </div>
    )
}

export default AboutMe