import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ formData }) {
  const { register, handleSubmit, errors } = useForm();
  const priceFixed = parseInt(formData.price).toFixed(0);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nummeret på huset:</label>
        <input
          name="number"
          type="text"
          placeholder={`Nr. ${formData.number}`}
          // Maybe: value=`${formData.number}`
          {...register("value_name", { required: true })}
        />
      </div>
      <div>
        <label>Dit navn og efternavn:</label>
        <input
          name="fullName"
          type="text"
          placeholder="Anders Andersen"
          {...register("value_name", { required: true })}
        />
      </div>
      <div>
        <label>Dit telefon nr.:</label>
        <input
          name="phone"
          type="number"
          placeholder="+45 12 34 56 78"
          {...register("value_name", { required: true })}
        />
      </div>
      <div>
        <label>Din mailadresse:</label>
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          {...register("value_name", { required: true })}
        />
      </div>
      <div>
          <p>Pris:</p>
      </div>
      <div>
        {/* Fix coma toFixed() */}
          <p>{priceFixed}</p>
      </div>
      <input type="submit" className="btn"/>
    </form>
  );
}
