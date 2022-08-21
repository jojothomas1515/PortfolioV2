import React, {useEffect, useRef} from 'react';
import "../styles/components/Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const navbarRef = useRef(null)

    useEffect(()=>{
        // @ts-ignore
        const navb:HTMLDivElement = navbarRef.current;
        navb.style.transform = "translateY(0)";
    }, [])


    return (
        <div className={"Navbar"} ref={navbarRef}>
            <div className={"page__title"}>Portfolio Website</div>
            <div>
                <label htmlFor={'nav__toggle'}>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <input type={"checkbox"} id={'nav__toggle'} style={{display:"none"}}/>

                <div className={"nav__con"}>
                    <a href="#skill" className="nav__item">Skills</a>
                    <a href="#projects" className="nav__item">Projects</a>
                </div>
            </div>

        </div>
    );
}

export default Navbar;