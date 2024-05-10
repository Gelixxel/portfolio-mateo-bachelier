import React, { useState } from 'react'
import '../components/Navbar.css'
import { FaGripLines } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Menu from './Menu'
import { Link } from 'react-router-dom';

function Navbar({ home, about, projects }) {
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => setShowMenu(false);
    return (


        <div>
            <div className='navbar'
                style={{
                    height: showMenu ? 'auto' : '80px'
                }}

            >
                <div className='navigation-links'>
                    <nav>
                        <label className='logo'>Arpan Neupane</label>
                        <ul>
                            <li><a href={home}>Home</a></li>
                            <li><a href={about}>About</a></li>
                            <li><a href={projects}>Projects</a></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <li onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} className='bars'>{showMenu ? <AiOutlineClose /> : <FaGripLines />}</li>
                    </nav>
                </div>

                <div className='menu'>
                    <Menu
                        showMenu={showMenu}
                        closeMenu={closeMenu}
                    />
                </div>
            </div>

        </div>











    )
}

export default Navbar
