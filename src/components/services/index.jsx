import React from 'react'
import styles from './styles.module.scss';
import { AiOutlineCheck } from 'react-icons/ai';

const data = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
]

const webData = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

]

const contentData = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

]

const Services = () => {
  return (
    <section id='services' className={styles.services}>

      <header className='text-center'>
        <h5>What I Offer!</h5>
        <h2>Services</h2>
      </header>

      <div className={`${styles.services__container} container grid`}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>
          <ul className={styles.service__list}>

            {data.map((item , indx) => (
              <li className={styles.service__item} key={indx}>
                <AiOutlineCheck className={styles.service__icon}/>
                <p>{item}</p>
              </li>


            ))}

          </ul>
        </article>

        <article className={`${styles.service} ${styles.best}`}>
  
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>
 
          <ul className={styles.service__list}>

            {webData.map((item , indx) => (
              <li className={styles.service__item} key={indx}>
                <AiOutlineCheck className={styles.service__icon}/>
                <p>{item}</p>
              </li>
            ))}

          </ul>
        </article>

        <article className={styles.service}>

          <div className={styles.service__head}>
            <h3>Content Creator</h3>
          </div>

          <ul className={styles.service__list}>

            {contentData.map((item , indx) => (
              <li className={styles.service__item} key={indx}>
                <AiOutlineCheck className={styles.service__icon}/>
                <p>{item}</p>
              </li>
            ))}

          </ul>

        </article>
      </div>


    </section>
  )
}

export default Services
