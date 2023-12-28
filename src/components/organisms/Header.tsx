import React from 'react'
import BlogPost from '../molecules/BlogPost'
import Logo from '../atoms/Logo'

// scss

// components


const Header = () => {

    return (
        <header>
            {/* Logo */}
            <div>
                <Logo id={1} link='/' size='medium' />
            </div>
            {/* Menu */}
        </header>
    )
}


export default Header