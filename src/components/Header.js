import React, { useState, useEffect, useRef } from 'react';
import NavLink from "./NavLink";
import './header.css'

const Header = () => {
  const [isDark, setDark] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const topPosition = menuRef.current.getBoundingClientRect().y
    const onScroll = () => {
      topPosition < window.pageYOffset ? setDark(true) : setDark(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)

  }, [])


  return <header>
    <div className={`menu-panel ${isDark ?' sticky' : '' }` } ref={menuRef}>
      <div className={`menu-panel-outer ${isDark ? ' isDark' : ''}`}>
        <div className="menu-panel-inner">
          <nav className="navbar">
            <ul className="menu-list">
              <NavLink isDark={isDark} text="Events" side="left" active />
              <NavLink isDark={isDark} text="rankings" side="left" />
              <NavLink isDark={isDark} text="athletes" side="left" />
              <NavLink isDark={isDark} text="news" side="left" />
              <NavLink isDark={isDark} home />
              <NavLink isDark={isDark} text="videos" side="is-pushed" />
              <NavLink isDark={isDark} text="connect" side="right" />
              <NavLink isDark={isDark} text="watch" side="right" />
              <NavLink isDark={isDark} text="shop" side="right" />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
};

export default Header;
