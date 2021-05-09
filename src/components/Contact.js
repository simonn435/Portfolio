import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkwevjg");
  if (state.succeeded) {
    return (
      <section className="contact">
        <div className="contact-inner ">
          <h3 className="subtitle">Contact me!</h3>
          <p>Thanks for your message, i'll read it as soon as i can!</p>
        </div>
      </section>
    );
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-inner ">
        <h3 className="subtitle">Contact me!</h3>

        <form onSubmit={handleSubmit} action="https://formspree.io/f/mqkwevjg" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
          <ValidationError errors={state.errors} prefix="Email" field="email" />

          <label htmlFor="email">Message:</label>
          <textarea type="text" name="message" required />
          <ValidationError errors={state.errors} prefix="Message" field="message" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
