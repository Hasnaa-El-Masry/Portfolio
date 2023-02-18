import React, { useRef, useState } from 'react'
import styles from './styles.module.scss';
import { Card } from '../shared/card';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsMessenger } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);

    emailjs.sendForm('service_gifnwfg', 'template_t01em7h', form.current, '6udIKbkiJOy_IpyPo')
      .then((result) => {
        setSuccess(result.text);
        setTimeout(() => {
          setSuccess(false)
        }, 5000);
        e.target.reset();
      }, (error) => {
        setError(error.text);
      });

  };

  return (
    <section id='contact' className={styles.contact}>
      <header className='text-center'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </header>
      <div className={`${styles.contact__container} container grid`}>

        <div className={`${styles.contact__address} grid`}>
          <Card>
            <article>
              <IoIosMail />
              <h4>Email</h4>
              <h5>support@gmail.com</h5>

              <a href="mailto:hasnaa.elmasry94@gmail.com">
                <small>Send a message</small>
              </a>

            </article>
          </Card>

          <Card>
            <article>
              <BsMessenger />
              <h4>Messenger</h4>
              <h5>hasnaaelmasry</h5>

              <a href="https://m.me/hasnaa.elmasry">
                <small>Send a message</small>
              </a>
            </article>
          </Card>

          <Card>
            <article>
              <RiWhatsappFill />
              <h4>WhatsApp</h4>
              <h5>123-456-789</h5>
              <a href="https://api.whatsapp.com/send?phone">
                <small>Send a message</small>
              </a>
            </article>
          </Card>

        </div>

        <div className={styles.contact__form}>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text"  name='email' placeholder='Your Email' required />
            <textarea type="text"  name='message' rows={7} placeholder='Your Message' required />
            {success && <div className="alert">

              <p className='success'>your message was sent successfuly</p>

            </div>}

            {error && <div className="alert">
              <p className='error'>Something is wrong!</p>
            </div>}

            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
