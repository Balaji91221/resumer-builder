import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Contact.module.css";
import Contact from '../../assets/Contact.jpg';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
      <div className={styles.content}>
          <div className={styles.container}>
        <div className={styles.formcontainer}>
          <h1 className={styles.contactHeader}>Contact us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId={styles.formName}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className={styles.imagecontainer}>
          <img src={Contact} alt="contact" className={styles.contact} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
