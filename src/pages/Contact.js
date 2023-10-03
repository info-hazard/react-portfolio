import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

  function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "name") {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }
      if (!name) {
        setErrorMessage(`Please enter name`);
        return;
      }
      if (!message) {
        setErrorMessage(`Please enter message`);
        return;
      }
  
      setName("");
      setMessage("");
      setEmail("");
      setErrorMessage("");
    };

  return (
    <div>
      <p>Contact</p>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name" className="text-black">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-black">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-black">
              Message:
            </label>
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="text-center"> 
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
          </div>
        </form>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;