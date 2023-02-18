import React from 'react'
import styles from './styles.module.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const items = [
  { href: '#', title: 'Home' },
  { href: '#about', title: 'About' },
  { href: '#experience', title: "Experience" },
  { href: '#services', title: "Services" },
  { href: '#portfolio', title: "Portfolio" },
  { href: '#testimonials', title: "Testimonials" },
  { href: '#contact', title: "Contact" },
]


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>

        <a href="#" className={styles.footer__logo}>Logo</a>

        <ul className={styles.footer__permalinks}>

          {items.map((nav, indx) => (
            <li key={indx}>
              <a href={nav.href} >
                {nav.title}
              </a>
            </li>
          ))}

        </ul>

        <div className={`${styles.footer__socials}`}>
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><AiFillInstagram /></a>
        </div>

        <div className={styles.footer__copyright}>
          <small>&copy; Logo. All rights reserved</small>
        </div>
      </div>



    </footer>
  )
}

export default Footer
