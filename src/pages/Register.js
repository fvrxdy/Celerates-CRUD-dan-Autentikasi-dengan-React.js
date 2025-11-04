import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } catch {
      alert('Registrasi gagal');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 card-modern" style={{ width: '400px' }}>
        <h3 className="text-center mb-3 fw-semibold">Buat Akun</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              name="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" className="w-100 btn-modern py-2 fw-semibold">
            Register
          </Button>
          <div className="text-center mt-3">
            <Button
              variant="link"
              className="text-decoration-none"
              onClick={() => navigate('/login')}
            >
              Sudah punya akun? <strong>Login</strong>
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
