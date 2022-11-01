import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import Swal from "sweetalert2";
import Contact from "../styles/ContactMe.module.css";

function ContactMe() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) {
      emailjs
        .sendForm(
          "service_bvsvmj5",
          "template_31evzds",
          form.current,
          "soQMU5-SICIbkYbi9"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("email sent");
            Swal.fire({
              icon: "success",
              title: "Hooray!",
              text: "Email sent successfully.",
            });
            document.getElementById("contact-form").reset();
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Oops!",
              text: "Sorry, something went wrong there. Try again.",
            });
          }
        );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a valid email address.",
      });
    }
  };

  return (
    <div className={Contact.container}>
      <div className={Contact.title}>
        <h1 className={Contact.heading1}>Get in touch</h1>
      </div>

      {/* <div className={Contact.content}>
        <p className={Contact.paragraph}>
          Send me a message and I'll get back to you as soon as possible!
        </p>
        <button
          className={Contact.button}
          onClick={() => {
            setShowForm(true);
          }}
        >
          Say hello
        </button>
        <p className={Contact.paragraph}>
          Or download my resume for your reference!
        </p>

        <a
          href="https://drive.google.com/file/d/1YdW8TPrgiIcE_Yd7qKTrAYWizPkNrhl4/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className={Contact.link}
        >
          Resume
        </a>
      </div> */}

      <div className={Contact.content}>
        <p className={Contact.paragraph}>
          Send me a message and I'll get back to you as soon as possible!
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={Contact.formContainer}
          id="contact-form"
        >
          <div className={Contact.nameEmailContainer}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className={[Contact.name, Contact.inputs, Contact.box].join(" ")}
              required
            />
            <label className={[Contact.nameLabel, Contact.inputs].join(" ")}>
              Name
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={[Contact.email, Contact.inputs, Contact.box].join(" ")}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={[Contact.emailLabel, Contact.inputs].join(" ")}>
              Email
            </label>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className={[Contact.message, Contact.inputs, Contact.box].join(" ")}
            required
          />
          <label className={[Contact.msgLabel, Contact.inputs].join(" ")}>
            Message
          </label>
          <div className={Contact.btnContainer}>
            <input
              type="submit"
              value="Send message!"
              className={[Contact.button, Contact.inputs].join(" ")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
