import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_iKlFVYLk9kyYQV2fO6bD6");

export default function Form({ formData }) {
  //const priceFixed = parseInt(formData.price).toFixed(0);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_b9c11vh",
        e.target,
        "user_iKlFVYLk9kyYQV2fO6bD6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </form>
  );
}

// <form onSubmit={sendEmail}>
// <div>
//   <label>Nummeret på huset:</label>
//   <input
//     name="nr"
//     type="text"
//     placeholder={`Nr. ${formData.number}`}
//   />
// </div>
// <div>
//   <label>Dit navn og efternavn:</label>
//   <input
//     name="name"
//     type="text"
//     placeholder="Anders Andersen"
//   />
// </div>
// <div>
//   <label>Dit telefon nr.:</label>
//   <input
//     name="number"
//     type="number"
//     placeholder="+45 12 34 56 78"
//   />
// </div>
// <div>
//   <label>Din mailadresse:</label>
//   <input
//     name="email"
//     type="email"
//     placeholder="example@email.com"
//   />
// </div>
// <div>
//   <p>Pris:</p>
// </div>
// <div>
//   {/* Fix coma toFixed() */}
//   <p>{priceFixed}</p>
// </div>
// <input type="submit" className="btn" />
// </form>
