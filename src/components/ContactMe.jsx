import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { HiArrowSmLeft } from "react-icons/hi";
import Contact from "../styles/ContactMe.module.css";

const StyledTextField = styled(TextField)({
  "& label": {
    // fontFamily: "Roboto Mono",
    // fontWeight: 300,
    color: "#f7f4f3",
    opacity: 0.5,
  },
  "& label.Mui-focused": {
    color: "#ffee32",
    opacity: 1,
  },
  "label + &": {
    marginRight: 3,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffee32",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f7f4f3",
    },
    "&:hover fieldset": {
      borderColor: "#ffee32",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffee32",
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "Roboto Mono",
    color: "#f7f4f3",
  },
});

function ContactMe() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

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
            setName("");
            setEmail("");
            setMsg("");
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
      <div
        className={Contact.container}
        style={{
          position: "absolute",
          opacity: !showForm ? 1 : 0,
          backgroundColor: "#202020",
          transition: "all 0.3s",
          right: !showForm ? 0 : "40%",
          visibility: !showForm ? "visible" : "hidden",
        }}
      >
        <div className={Contact.title}>
          <h1 className={Contact.heading1}>Get in touch</h1>
        </div>

        <div className={Contact.content}>
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
            // className={Contact.link}
            className={Contact.button}
          >
            Resume
          </a>
        </div>
      </div>
      <div
        className={Contact.formContent}
        style={{
          position: "absolute",
          opacity: showForm ? 1 : 0,
          backgroundColor: "#202020",
          transition: "all 0.3s",
          left: showForm ? 0 : "40%",
          visibility: showForm ? "visible" : "hidden",
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className={Contact.formContainer}
          autoComplete="off"
        >
          <div className={Contact.back}>
            <button
              type="button"
              className={Contact.backBtn}
              onClick={() => setShowForm(false)}
            >
              <HiArrowSmLeft size={25} />
            </button>
          </div>
          <div className={Contact.nameEmailContainer}>
            <StyledTextField
              value={name}
              name="user_name"
              label="Name"
              variant="outlined"
              required
              type="text"
              className={Contact.name}
              onChange={(e) => setName(e.target.value)}
              style={{
                margin: "2%",
              }}
            />

            <StyledTextField
              value={email}
              name="user_email"
              label="Email"
              variant="outlined"
              required
              type="email"
              className={Contact.email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                margin: "2%",
              }}
            />
          </div>

          <StyledTextField
            value={msg}
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={7}
            required
            className={Contact.message}
            onChange={(e) => setMsg(e.target.value)}
            style={{
              margin: "2%",
            }}
          />

          <div className={Contact.btnContainer}>
            <input
              type="submit"
              value="Send message!"
              className={[Contact.button].join(" ")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
