import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const RazForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Otto",
    username: "",
    state: "",
    zip: "",
    interest: "",
    agree: false,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        console.log(formData)
        // alert("Form submitted and email sent!");
        const recipient = "adam.razick@gmail.com";
        const subject = encodeURIComponent(`${formData.firstName} ${formData.lastName} is interested!`);
        let body =`Dear Adam,\n\nI am interested in a rishta. Here are my details: \n`;
        body = body + `\nFirst Name: ${formData.firstName}`
        body = body + `\nLast Name: ${formData.lastName}`
        body = body + `\nInstagram Name: ${formData.username}`
        body = body + `\nState: ${formData.state}`
        body = body + `\nZip: ${formData.zip}`
        body = body + `\nInterest: ${formData.interest}`

        const encodedBody = encodeURIComponent(body)
        
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${encodedBody}`;
        window.location.href = mailtoLink;
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Instagram</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Why are you interested in Adam?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default RazForm;