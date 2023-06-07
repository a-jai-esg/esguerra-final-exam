import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCenter from "../styles/images/Tadhana-logo-transparent.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login({ setResponse }) {
  const fields = [
    {
      label: "Email Address",
      type: "email",
      placeholder: "juan@tadhana.com",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
    },
  ];

  useEffect(() => {
    document.title = "Tadhana: Job Listing for Single Parents and Alike";
  });

  const [email, setEmail] = useState(fields[0].placeholder);
  const [password, setPassword] = useState(fields[0].placeholder);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Show alert when the registration is successful

    try {
      const response = await axios.get("http://192.168.1.5:4000/app/login", {
        params: {
          email: email,
          password: password,
        },
      });

      console.log(response);

      if (response.status == 200) {
        setStatus(`Welcome back, ${response.data.name}`);
        setResponse(response);
        navigate("/profile");
      }
    } catch (error) {
      setStatus("Please review entries.");
    }
  };

  return (
    <>
      <div className="form form-login">
        <div>
          <img className="card-img-login" src={ImageCenter}></img>
        </div>
        <Form>
          {fields.map((field) => {
            return (
              <Form.Group
                className="mb-3 mb-3-login"
                controlId={field.controlId}
              >
                <Form.Label>{field.label}</Form.Label>
                <br />
                <Form.Control
                  className="textboxes textboxes-login"
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={(e) => {
                    if (field.type === "email") {
                      setEmail(e.target.value);
                    } else {
                      setPassword(e.target.value);
                    }
                  }}
                />
                <br />
              </Form.Group>
            );
          })}
          <Form.Group
            className="form_fields text-muted"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className="form_fields"
              type="checkbox"
              label="Remember Me"
            />
          </Form.Group>
          <br />
          <Button variant="flat" size="xxl" onClick={handleLogin}>
            Sign In!
          </Button>
        </Form>
        <p className="status_fields">{status}</p>
      </div>
      <br />
      <Link className="link" to="/registration">
        Not registered? Register here.
      </Link>
    </>
  );
}

export default Login;
