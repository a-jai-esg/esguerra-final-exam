import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import ImageCenter from "../styles/images/Tadhana-logo-transparent.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Registration() {
  const fields = [
    {
      label: "Enter your Name",
      type: "name",
      placeholder: "e.g. Juan Dela Cruz",
      controlId: "formBasicEmail",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "e.g juan@tadhana.com",
      controlId: "formBasicPassword",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      controlId: "formBasicPassword",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "********",
      controlId: "formBasicPassword",
    },
    {
      label: "My Job is",
      type: "jobDescription",
      placeholder: "e.g. UI/UX Designer",
      controlId: "formBasicName",
    },
    {
      label: "Location/Address",
      type: "address",
      placeholder: "e.g. Cebu City",
      controlId: "formBasicName",
    },
    {
      label: "About me",
      type: "aboutUser",
      placeholder: "",
      controlId: "formBasicName",
    },
    {
      label: "You may paste a link of your profile picture here",
      type: "profilePicture",
      placeholder: "",
      controlId: "formBasicName",
    },
  ];

  // useStates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [address, setAddress] = useState("");
  const [aboutUser, setAboutUser] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const [status, setStatus] = useState("");

  const checkboxfields = [
    {
      label: "By signing up you agree to the terms and conditions",
    },
  ];

  const handleRegistration = async () => {
    setStatus("");
    // Show alert when the registration is successful
    if ((name === " " && email === " ") || password != confirmPass) {
      return;
    } else {
      try {
        const response = await axios.post(
          "http://192.168.1.5:4000/app/register",
          {
            params: {
              name: name,
              email: email,
              password: password,
              jobDescription: jobDescription,
              address: address,
              aboutUser: aboutUser,
              profilePicture: profilePicture,
            },
          }
        );

        if (response.status == 200) {
          setStatus(`Welcome aboard, ${name}!`);
        }
      } catch (error) {
        alert(error);
        setStatus("Please check fields.");
      }
    }
  };

  return (
    <>
      <div className="form form-registration">
        <div>
          <img className="card-img-registration" src={ImageCenter}></img>
        </div>
        <Form>
          {fields.map((field) => {
            return (
              <>
                <Form.Group className="mb-3" controlId={field.controlId}>
                  <Form.Label>{field.label}</Form.Label>
                  <br />
                  <Form.Control
                    className="textboxes textboxes-registration"
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={(e) => {
                      switch (field.type) {
                        case "name":
                          setName(e.target.value);
                          break;
                        case "email":
                          setEmail(e.target.value);
                          break;
                        case "password":
                          if (field.label === "Password") {
                            setPassword(e.target.value);
                          } else {
                            setConfirmPass(e.target.value);
                          }
                          break;
                        case "jobDescription":
                          setJobDescription(e.target.value);
                          break;
                        case "address":
                          setAddress(e.target.value);
                          break;
                        case "aboutUser":
                          setAboutUser(e.target.value);
                          break;
                        case "profilePicture":
                          setProfilePicture(e.target.value);
                          break;
                      }
                    }}
                  />
                </Form.Group>
              </>
            );
          })}
          <br />
          {checkboxfields.map((field) => {
            return (
              <>
                <Form.Group
                  className="form_fields text-muted"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    className="form_fields"
                    type="checkbox"
                    label={field.label}
                  />
                </Form.Group>
              </>
            );
          })}
          <br />
          <Button variant="flat" size="xxl" onClick={handleRegistration}>
            Register!
          </Button>
        </Form>
        <p className="status_fields">{status}</p>
      </div>
      <div className="form-link">
        <Link className="link" to="/login">
          Registered already? Login here.
        </Link>
      </div>
    </>
  );
}

export default Registration;
