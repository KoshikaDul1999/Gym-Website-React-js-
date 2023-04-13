import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3mgx5uu', 'template_2tgms7o', form.current, 'EgiOBQpzlSlwAaAbP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span className='stroke-text'>YOUR BODY</span>
                <span> WITH US ?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter Your Email Address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
