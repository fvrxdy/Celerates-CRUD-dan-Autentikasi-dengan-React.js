import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch {
      alert('Email atau password salah');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 card-modern" style={{ width: '400px' }}>
        <h3 className="text-center mb-3 fw-semibold">Masuk</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Form.Group>
          <Button type="submit" className="w-100 btn-modern py-2 fw-semibold">
            Login
          </Button>
          <div className="text-center mt-3">
            <Button
              variant="link"
              className="text-decoration-none"
              onClick={() => navigate('/register')}
            >
              Belum punya akun? <strong>Daftar</strong>
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
