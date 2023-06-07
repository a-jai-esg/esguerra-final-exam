import { Link } from "react-router-dom";
import React, { useState } from "react";
import ImageCenter from "../styles/images/Tadhana-logo-transparent.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
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

  const [email, setEmail] = useState(fields[0].placeholder);
  const [password, setPassword] = useState(fields[0].placeholder);

  return (
    <>
      <div className="form form-login">
        <div className>
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
          <Button variant="flat" size="xxl" type="submit">
            Sign In!
          </Button>
        </Form>
      </div>
      <br />
      <Link className="link" to="/registration">
        Not registered? Register here.
      </Link>
    </>
  );
}

export default Login;
