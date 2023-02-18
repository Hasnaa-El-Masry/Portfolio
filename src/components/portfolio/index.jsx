import React from 'react'
import styles from './styles.module.scss';

const data = [
  { title: 'Project Title' },
  { title: 'Project Title' },
  { title: 'Project Title' },
  { title: 'Project Title' },
  { title: 'Project Title' },
  { title: 'Project Title' },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <header className='text-center'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </header>


      <div className={`${styles.portfolio__container} container grid`}>

        {data.map((item , indx) => (
          <article className={styles.portfolio__item} key={indx}>

            <div className={styles.portfolio__img}>
              <img src="assets/imgs/proj.png" alt="" />
            </div>

            <h3>Project Title</h3>

            <div className={`${styles.portfolio__actions}`}>
              <a href="https://github.com" target='_blank' className='btn'>Github</a>
              <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>

          </article>
        ))}

      </div>
    </section>
  )
}

export default Portfolio