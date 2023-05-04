import { useState } from "react";
import formStyles from "../styles/form.module.css";
import utilStyles from "../styles/util.module.css";

const ReqPA = () => {
  const [emailToSend, setEmailToSend] = useState({
    name: "",
    email: "",
    subject: "Requesting professional advice",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const handleChange = (e) => {
    setEmailToSend({ ...emailToSend, [e.target.id]: e.target.value });
  };

  const handleValidation = () => {
    let isValid = true;

    if (emailToSend.name.trim() == "") {
      isValid = false;
    }
    if (emailToSend.email.trim() == "") {
      isValid = false;
    }
    if (emailToSend.subject.trim() == "") {
      isValid = false;
    }
    if (emailToSend.message.trim() == "") {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: emailToSend.email,
          name: emailToSend.name,
          subject: emailToSend.subject,
          message: emailToSend.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    } else {
      window.alert("Required fields (*) cannot be empty");
    }
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-delay="500"
      data-aos-duration="500"
      data-aos-easing="ease-in"
    >
      <h1 className={utilStyles.centreText} style={{marginTop: "3rem"}}>Request professional advice</h1>
      <div>
        <form
          className={`${formStyles.form} ${utilStyles.containerBgBorder}`}
          onSubmit={handleSubmit}
        >
          <div className={formStyles.inputContainer}>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.inputContainer}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail address"
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.inputContainer}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              defaultValue="Requesting professional advice"
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.inputContainer}>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Describe your problem"
              onChange={handleChange}
            />
          </div>

          <button disabled={buttonText == "Sending..."}>{buttonText}</button>
          <span style={{marginTop: "1rem", color: showSuccessMessage ? "green" : "red" }}>
            {showSuccessMessage
              ? "E-mail sent successfully"
              : showFailureMessage
              ? "E-mail could not be sent"
              : ""}
          </span>
        </form>
      </div>
    </div>
  );
};

export default ReqPA;
