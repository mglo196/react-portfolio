// Contact.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to handle form validation
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const errors = {};
    if (!formData.name) errors.name = true;
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = true;
    if (!formData.message) errors.message = true;

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <Container id="contact" className="p-5">
      <h2 className="text-center mb-4">Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            isInvalid={formErrors.name}
          />
          <Form.Control.Feedback type="invalid">
            Name is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            isInvalid={formErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            isInvalid={formErrors.message}
          />
          <Form.Control.Feedback type="invalid">
            Message is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
