import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className="header">
            {/* Logo on the left side */}
            <Link to="/">
            <img 
                className="header__logo"
                src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png"
                alt="amazon logo"
            />
            </Link>


            {/* Search Box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className='header__searchIcon' />
            </div>
            {/* 3 Links on the right */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to='/login' className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span> {/* add in user name dynamically after you add backend */}
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                </Link>
                {/* 2nd Link */}
                <Link to='/' className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                {/* 3rd Link */}
                <Link to='/' className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
                {/* 4th Link */}
                <Link to = '/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        {/* Shopping basket icon*/}
                        <ShoppingBasketIcon/>
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header_basketCount">0</span>
                    </div>
                </Link>

            </div>

            {/* basket */}
        </nav>
    )
}

export default Header;
