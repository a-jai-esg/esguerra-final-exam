import { Link } from "react-router-dom";
import ImageCenter from "../styles/images/Tadhana-logo-transparent.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Registration() {
  const fields = [
    {
      label: "Enter your Name",
      type: "name",
      placeholder: "Juan Dela Cruz",
      controlId: "formBasicEmail",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "juan@tadhana.com",
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
      placeholder: "UI/UX Designer",
      controlId: "formBasicName",
    },
    {
      label: "Location/Address",
      type: "address",
      placeholder: "Cebu City",
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

  const checkboxfields = [
    {
      label: "By signing up you agree to the terms and conditions",
    },
  ];

  return (
    <>
      <div className="form form-registration">
        <div className>
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
          <Button variant="flat" size="xxl" type="submit">
            Register!
          </Button>
        </Form>
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
