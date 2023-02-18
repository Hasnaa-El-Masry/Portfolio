import React from 'react'
import { Card } from '../shared/card';
import styles from './styles.module.scss';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const frontData = [
  { title: 'JavaScript', desc: 'Eperienced' },
  { title: 'React', desc: 'Eperienced' },
  { title: 'ES6', desc: 'Eperienced' },
  { title: 'HTML5', desc: 'Eperienced' },
  { title: 'Next JS', desc: 'Intermediate' },
  { title: 'TypeScript', desc: 'Intermediate' },
  { title: 'Redux', desc: 'Eperienced' },
  { title: 'SASS', desc: 'Eperienced' },
  { title: 'CSS3', desc: 'Eperienced' },
]

const toolsData = [
  { title: 'Ant Design', desc: 'Eperienced' },
  { title: 'Material UI', desc: 'Eperienced' },
  { title: 'Bootstrap', desc: 'Eperienced' },
  { title: 'Github', desc: 'Intermediate' },

]

const Experience = () => {
  return (
    <section id='experience' className={styles.experience}>
      <header className='text-center'>
        <h5>What Skill I Have!</h5>
        <h2>My Experience</h2>
      </header>
      <div className={`container  grid ${styles.experience__container}`}>
        <Card className={styles.skills}>
          <h3>Front End Skills</h3>
          <div className={`${styles.skills__container} grid`}>

            {frontData.map((item, indx) => (
              <div className={styles.skill} key={indx}>
                <BsFillPatchCheckFill className={`icon ${styles.skill__icon}`} />
                <div>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </div>
              </div>
            ))}

          </div>
        </Card>

        <Card className={styles.skills}>
          <h3>Used Tools</h3>
          <div className={`${styles.skills__container} grid`}>
            {toolsData.map((item , indx) => (
              <div className={styles.skill} key={indx}>
                <BsFillPatchCheckFill className={`icon ${styles.skill__icon}`} />
                <div>
                <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Experience