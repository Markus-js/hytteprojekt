import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_iKlFVYLk9kyYQV2fO6bD6");

export default function Form({ formData, handleSuccess, setForm }) {
  const priceFixed = parseInt(formData.price).toFixed(0);

  

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58zi6jz",
        "template_b9c11vh",
        e.target,
        "user_iKlFVYLk9kyYQV2fO6bD6"
      )
      .then(
        (result) => {
          console.log(result.text);
          // If result .then close current component, and show success component
          setForm(false)
          handleSuccess(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <div>
        <label>Nummeret på huset: {formData.number}</label>
        <input hidden name="hus_nr" type="text" value={formData.number} />
      </div>
      <div>
        <label>Dit navn og efternavn:</label>
        <input name="name" type="text" placeholder="Anders Andersen" required/>
      </div>
      <div>
        <label>Dit telefon nr.:</label>
        <input name="tlf" type="number" placeholder="+45 12 34 56 78" required/>
      </div>
      <div>
        <label>Din mailadresse:</label>
        <input name="user_email" type="email" placeholder="example@email.com" required/>
      </div>
      <div>
        <p>Pris:</p>
      </div>
      <div>
        {/* Fix coma toFixed() */}
        <p>{priceFixed}</p>
      </div>
      <input type="submit" className="btn" />
    </form>
  );
}
