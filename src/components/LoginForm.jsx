// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap"; // Import Bootstrap components
import "../components/styeComponents/LoginForm.css";
function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and API call here...
    console.log("Form data submitted:", formData);
  };

  return (
    <Container className="login-container">
      <h1>¡Inicia Sesión!</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar su correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar su contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <Button variant="link" className="reset-password-link" href="#">
          Restablecer contraseña
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
