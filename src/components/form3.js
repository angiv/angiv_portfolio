import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {

    function sendEmail (e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_9ynzm1q', e.target, 'user_MC5fAacB7W2jeHzTuqoSq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
 



    return (
    <div className="contact-form3">
            <div className="contact-form3-wrapper">
            <form onSubmit={sendEmail}>
                    <div className="one-column">
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="email" className="" placeholder="Email Address" name="email"/>
                        <input type="text" className="" placeholder="Subject" name="subject"/>
                        
                          <textarea
                                placeholder="Your message"
                                name="message">
                           </textarea>
                     </div>                    
            </form>
            </div>
                    <div className="button_wrapper">    
                            <button className="btn" type="submit">
                            Send
                            </button>
                    </div>
        </div>
    )
}