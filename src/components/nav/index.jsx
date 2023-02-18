import React, { useState } from 'react'
import styles from './styles.module.scss';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail, BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const items = [
  { href: '#', icon: <AiFillHome /> },
  { href: '#about', icon: <AiOutlineUser /> },
  { href: '#experience', icon: <BiBook /> },
  { href: '#services', icon: <RiServiceLine /> },
  { href: '#contact', icon: <BiMessageSquareDetail /> },
]
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const setActiveHandler = (href) => {
    setActiveNav(href)
  }

  return (
    <nav className={styles.nav}>
      <ul className={`grid ${styles.nav__menu}`}>
        {items.map((nav , indx) => (
          <li key={indx}>
            <a href={nav.href} onClick={() => setActiveNav(nav.href)} className={activeNav === nav.href ? styles.active : ''}>
              {nav.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
