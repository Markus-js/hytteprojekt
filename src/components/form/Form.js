import React, { useState } from "react";
import { fetch2api } from "../../helpers/helper";
// import emailjs from "emailjs-com";
// import { init } from "emailjs-com";
// init("user_iKlFVYLk9kyYQV2fO6bD6");



export default function Form({ formData, handleSuccess, setForm }) {
  const [data, setData] = useState({ name: "", email: "", tlf: "" });
  const priceFixed = parseInt(formData.price).toFixed(0);

  // POST API 
  const postReservation = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("item_id", formData.number);
    urlencoded.append("name", data.name);
    urlencoded.append("email", data.email);
    urlencoded.append("phone", data.tlf);
    const url = "https://api.mediehuset.net/hytteshop/reservation";
    const result = await fetch2api(url, "POST", urlencoded);
    console.log(result);
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_58zi6jz",
  //       "template_b9c11vh",
  //       e.target,
  //       "user_iKlFVYLk9kyYQV2fO6bD6"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);

  //         // If result .then close current component, and show success component
  //         setForm(false);
  // ===>    handleSuccess(true);   <=== // If DATA WAS SEND Successful = Then show Success <Popup /> App.js
  //         postReservation();     
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }

  console.log(data);

  return (
                  //{sendEmail}
    <form onSubmit={""}>
      <div>
        <h3 style={{margin: 0}}>Nummeret på huset: {formData.number}</h3>
      </div>
      <div>
        <label>Dit navn og efternavn:</label>
        <input
          name="name"
          type="text"
          placeholder="Anders Andersen"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Dit telefon nr.:</label>
        <input
          name="tlf"
          type="number"
          placeholder="+45 12 34 56 78"
          onChange={(e) => setData({ ...data, tlf: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Din mailadresse:</label>
        <input
          name="user_email"
          type="email"
          placeholder="example@email.com"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
      </div>
      <div>
        <p>Pris: {priceFixed}kr.</p>
      </div>
      <input type="submit" className="btn" />
    </form>
  );
}
