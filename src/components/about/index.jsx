import React from 'react'
import styles from './styles.module.scss';
import { FaAward, FaUsers } from 'react-icons/fa';
import { BiFolderOpen } from 'react-icons/bi';
import { Card } from '../shared/card';

const About = () => {
  return (
    <section id='about' className={styles.about}>

      <header className='text-center'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </header>

      <div className={`${styles.about__container} container grid`}>

        <div className={styles.about__img}>
          <div className={styles.about__img__container}>
            <img src="assets/imgs/about.jpg" alt="" />
          </div>
        </div>

        <div className={`${styles.about__content} grid`}>

          <div className={`${styles.about__cards} grid`}>

            <Card>
              <article>
                <FaAward className={styles.about__icon} />
                <h5 className='text-white'>Experience</h5>
                <small className='text-light'>+1 years working</small>
              </article>

            </Card>
            <Card>
              <article>
                <FaUsers className={styles.about__icon} />
                <h5 className='text-white'>Companies</h5>
                <small className='text-light'>2 worked in</small>
              </article>
            </Card>

            <Card>
              <article>
                <BiFolderOpen className={styles.about__icon} />
                <h5 className='text-white'>Projects</h5>
                <small className='text-light'>2 completed</small>
              </article>
            </Card>
          </div>

          <div className={styles.about__info}>

            <p className='about__info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid eius doloribus in repudiandae delectus asperiores molestiae officia dolor. Laborum, quod facilis. Aut, temporibus ipsam incidunt rerum aliquam quibusdam officia.</p>

            <a href="#contact" className='btn btn-primary'>Lets Talk</a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About
