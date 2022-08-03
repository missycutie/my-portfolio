import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri"
import {AiOutlineLinkedin} from "react-icons/ai"
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ktsrnpq', 'template_nupcgzp', form.current, 'FofDE_7TQ9wIWqxTU')
    form.current.reset()
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>missycutie@gmail.com</h5>
            <a href="mailto:trinhchau.1006@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"  />
            <h4>Messenger</h4>
            <h5>missycutie</h5>
            <a href="https://www.facebook.com/profile.php?id=100036593960130" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon"  />
            <h4>Linkedin</h4>
            <h5>missycutie</h5>
            <a href="https://www.linkedin.com/in/missycutie/" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required></input>
          <input type="email" name='email' placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="Submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
