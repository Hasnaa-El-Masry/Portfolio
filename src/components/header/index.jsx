import React from 'react'
import styles from './styles.module.scss';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Header = () => {

  const scrollDown = (e) => {
    e.preventDefault();
    window.scrollBy(0, document.body.scrollHeight)
  }

  return (
    <header className={styles.header}>
      <div className={`container grid ${styles.header__container}`} >

        <div className={styles.header__content}>
          <h5 className='text-white'>Hello I'm</h5>
          <h1>Hasnaa Elmasry</h1>
          <h5>Front End Developer</h5>
        </div>

        <div className={styles.header__actions}>
          <a href="#" className='btn' download>Download CV</a>
          <a href="#" className='btn btn-primary'>Lets talk!</a>
        </div>

        <div className={styles.header__img}>
          <img src="assets/imgs/user.png" alt="" />
        </div>

        <div className={styles.header__social}>
          <ul className='grid'>
            <li><a href="#"><BsGithub /></a></li>
            <li><a href="#"></a><AiFillLinkedin /></li>
            <li><a href="#"></a><AiFillFacebook /></li>
          </ul>
        </div>

        <div className={styles.header__scroll}>
          <a onClick={scrollDown}>Scroll Down</a>
        </div>

      </div>
    </header>

  )
}

export default Header
