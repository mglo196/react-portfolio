import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required!";
    if (!formData.email) formErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid!";
    if (!formData.message) formErrors.message = "Message is required!";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted!");
      // You can handle sending an email or storing the form data here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
        {errors.message && <span>{errors.message}</span>}
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
