import React, {useState} from 'react';

const Navigation = (props) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
    <div className="navigation">
        <div className="main-header">
            <div className={`section-current ${props.viewModel}`}>{props.headerName}</div>
            <div className="links">
                <a href="#home" className="about"><button>HOME</button></a>
                <a href="#my-work" className="work" ><button >WORK</button></a>
                <a href="#resume" className="resume" ><button >RÉSUMÉ</button></a>
                <a href="#contact" className="contact"><button  >CONTACT</button></a>
                <a href="#about" className="about"><button  >ABOUT</button></a>
            </div>
        </div>
        {openMenu && <div onClick={() => setOpenMenu(!openMenu)} className="hide-menu"></div>}
        <div className={`mobile-header ${openMenu && 'open-menu-container'}`}>

            

            <div className="hamburger " onClick={() => setOpenMenu(!openMenu)}>
            <div className="section-current">{props.headerName}</div>
            <i className="fas fa-bars"></i>
            </div>

            {openMenu &&
            <ul className="animated bounceInUp">
            <a onClick={() => setOpenMenu(false)} href="#home" className="about">  <li> <button  >HOME</button>  </li></a>
            <a onClick={() => setOpenMenu(false)} href="#my-work" className="work" >   <li><button >WORK</button>  </li></a>
            <a onClick={() => setOpenMenu(false)} href="#resume" className="resume" >  <li><button >RÉSUMÉ</button>  </li></a>
            <a onClick={() => setOpenMenu(false)} href="#contact" className="contact">   <li><button  >CONTACT</button>  </li></a>
            <a onClick={() => setOpenMenu(false)} href="#about" className="contact">   <li><button  >ABOUT</button>  </li></a>
            </ul>
            }

        </div>

        <style> 
        {`
            .navigation {
                position: fixed;
                z-index: 5;
                top:0
            }
            .main-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            height: 3rem;
            position: fixed;
            width: 100%;
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
            border-color: rgba(255,255,255,.8);
            }

            .mobile-header {
                text-align: center;
                background: transparent;
                transition-duration: .3s;
                font-size: 3rem;
                z-index: 5;
                position: relative;
                cursor: pointer;
                height: 3rem;
                transition-duration: .5s;
                transition-property: height;
                width: 100vw
            }
            .section-current {
                text-transform: uppercase
            }
            .section-current.desktop, section-current.wide {
                text-transform: uppercase;
                color: #d4e7e9;
                width: auto;
                background: #008c9f;
                padding: .25rem 1.5rem;
                margin-left: -1rem;
                border-radius: 0 1rem 1rem 0;
                transition-duration: .3s;
                font-weight: bold;
            }

            .hide-menu {
                background: #00000040;
                position:fixed;
                height: 100vh;
                width: 100vw;
                z-index: 2;
            }
            .open-menu-container {
                background: #055766e8;
                height: 100vh;
            }

            .mobile-header li {
                margin: auto;
                width:100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition-duration: .3s;
                height: calc(20vh - .6rem);
            }
            .mobile-header li button {
                font-size: 8vh;
            }
            .hamburger {
                justify-content: space-between;
                font-size: 1.5rem;
                height: 3rem;
                display: flex;
                align-items: center;
                padding: 0 1rem
            }
            .mobile-header li:hover, .mobile-header .hamburger:hover {
                background: #159ab6
            }
            .mobile-header a {
                text-decoration: none;
            }
            .mobile-header ul {
                list-style-type: none;
                margin:0;
                padding:0
            }

        @media screen and (max-width: 750px) {
            .main-header {
                display: none;
            }
        }

        @media screen and (min-width: 750px) {
            .mobile-header {
                display: none;
            }
        }
        
        
        `}
        </style>

        </div>

    )
}
export default Navigation