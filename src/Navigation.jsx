import React, {useState} from 'react';

const Navigation = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
    <>
        <div className="main-header">
            <div className="links">
                <a href="#home" className="about"><button  >ABOUT</button></a>
                <a href="#my-work" className="work" ><button >WORK</button></a>
                <a href="#resume" className="resume" ><button >RÉSUMÉ</button></a>
                <a href="#sectionFour" className="contact"><button  >CONTACT</button></a>
      
            </div>
        </div>
        {openMenu && <div onClick={() => setOpenMenu(!openMenu)} className="hide-menu"></div>}
        <div className={`animated slideInDown mobile-header ${openMenu && 'add-shadow'}`}>

            

            <div className="hamburger " onClick={() => setOpenMenu(!openMenu)}>
            <i className="fas fa-bars"></i>
            </div>

            {openMenu &&
            <ul className="animated bounceInRight">
            <a href="#home" className="about">  <li> <button  >ABOUT</button>  </li></a>
            <a href="#my-work" className="work" >   <li><button >WORK</button>  </li></a>
            <a href="#resume" className="resume" >  <li><button >RÉSUMÉ</button>  </li></a>
            <a href="#sectionFour" className="contact">   <li><button  >CONTACT</button>  </li></a>
            </ul>
            }

        </div>

        <style> 
        {`

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
            border-color: rgba(255,255,255,.8);
            }

            .mobile-header {
                text-align: center;
                background: linear-gradient(.33turn, #265498f2, #5579abf2);
                transition-duration: .3s;
                font-size: 3rem;
                z-index: 5;
                position: relative;
                cursor: pointer
            }
            .hide-menu {
                background: #00000040;
                position:fixed;
                height: 100vh;
                width: 100vw;
                z-index: 2;
            }
            .add-shadow {
                box-shadow: 0 10px 40px 30px black;
            }
            .mobile-header li, .mobile-header .hamburger {
                height: 4rem;
                margin: auto;
                width:100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition-duration: .3s;
            }
            .mobile-header .hamburger {
                justify-content: flex-end;
                padding: 1.5rem;
                font-size: 1.5rem;
            }
            .mobile-header li:hover, .mobile-header .hamburger:hover {
                background: #6c9de0
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

        </>

    )
}
export default Navigation