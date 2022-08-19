import React, { useEffect, useState } from "react";
import "./nav.css"

function Nav() {

    const [show, setShow] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        })
    }, [])

    return (

        <div className={`mainlogo ${show && 'background'}`}>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo2" className="netlogo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo" className="sidelogo" />
        </div>
    )
}

export default Nav