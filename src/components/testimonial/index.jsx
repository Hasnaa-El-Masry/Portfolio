import React from 'react'
import styles from './styles.module.scss';

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const data = [
  { name: 'Client Name', img: 'assets/imgs/avatar.jpg', qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi similique nesciunt, fugiat odit tempora a reiciendis officia nam suscipit minima alias sint incidunt natus maiores placeat quidem autem molestias?' }
  , { name: 'Client Name', img: 'assets/imgs/avatar.jpg', qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi similique nesciunt, fugiat odit tempora a reiciendis officia nam suscipit minima alias sint incidunt natus maiores placeat quidem autem molestias?' }
  , { name: 'Client Name', img: 'assets/imgs/avatar.jpg', qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi similique nesciunt, fugiat odit tempora a reiciendis officia nam suscipit minima alias sint incidunt natus maiores placeat quidem autem molestias?' }
  , { name: 'Client Name', img: 'assets/imgs/avatar.jpg', qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi similique nesciunt, fugiat odit tempora a reiciendis officia nam suscipit minima alias sint incidunt natus maiores placeat quidem autem molestias?' }
]

const Testimonial = () => {
  return (
    <section className={styles.testimonials}>

      <header className='text-center'>
        <h5>Review From Clinets</h5>
        <h2>Testimonials</h2>
      </header>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={`${styles.testimonials__container} container`}
      >

        {data.map((item , indx) => (
          <SwiperSlide className={styles.testimonials__item} key={indx}>
            <div className={styles.item__avatar}>
              <img src={item.img} alt="" />
            </div>
            <h5 className='text-white'>{item.name}</h5>
            <small>{item.qoute}</small>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  )
}

export default Testimonial