import React, { useState } from 'react';


const CoverPage = ({ fullpageApi, viewModel }) => {

    const [menuOption, setmenuOption] = useState('')

    return (
        <>

            <div className="name-holder">
                <div className="name slide-in-bottom">Karl Rodulfo  </div>
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

                    <div>
                        <div onClick={() => { fullpageApi.moveTo('my-work') }} onMouseOver={() => setmenuOption('My Work')} onMouseOut={() => setmenuOption('')} className="icon-container">
                            <img className="icon" alt="icon" src="2_work.svg" />
                        </div>
                        {(viewModel === 'mobile' || viewModel === 'tablet') && <p>My Work</p>}
                    </div>

                    <div>
                        <div onClick={() => { fullpageApi.moveTo('resume') }} onMouseOver={() => setmenuOption('Résumé')} onMouseOut={() => setmenuOption('')} className="icon-container">
                            <img className="icon" alt="icon" src="3_resume.svg" />
                        </div>
                        {(viewModel === 'mobile' || viewModel === 'tablet') && <p>Résumé</p>}
                    </div>

                    <div>
                        <div onClick={() => { fullpageApi.moveTo('about') }} onMouseOver={() => setmenuOption('About')} onMouseOut={() => setmenuOption('')} className="icon-container">
                            <img className="icon" alt="icon" src="1_me.svg" />
                        </div>
                        {(viewModel === 'mobile' || viewModel === 'tablet') && <p>About</p>}
                    </div>

                    <div>
                        <div onClick={() => { fullpageApi.moveTo('contact') }} onMouseOver={() => setmenuOption('Contact')} onMouseOut={() => setmenuOption('')} className="icon-container">
                            <img className="icon" alt="icon" src="4_contact.svg" />
                        </div>
                        {(viewModel === 'mobile' || viewModel === 'tablet') && <p>Contact</p>}
                    </div>


                </div>
                {
                    menuOption && (viewModel === 'desktop' || viewModel === 'wide') && <div className={`menu-option animated fadeIn`}>
                        <p>{menuOption}</p>
                    </div>
                }
            </div>


        </>

    )
}

export default CoverPage;