import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import api from '../api/api';
import FormModal from '../components/FormModal';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem('token');

  const fetchData = async () => {
    const res = await api.get('/items', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setItems(res.data);
  };

  const handleSave = async () => {
    if (editId) {
      await api.put(`/items/${editId}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      await api.post('/items', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    setForm({ title: '', description: '' });
    setEditId(null);
    setShow(false);
    fetchData();
  };

  const handleDelete = async (id) => {
    await api.delete(`/items/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, description: item.description });
    setEditId(item.id);
    setShow(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-semibold">Dashboard</h3>
          <Button className="btn-modern" onClick={() => setShow(true)}>
            + Tambah Data
          </Button>
        </div>

        <Table bordered hover responsive className="bg-white shadow-sm rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Judul</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-warning"
                    className="me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <FormModal
          show={show}
          handleClose={() => setShow(false)}
          handleSave={handleSave}
          form={form}
          setForm={setForm}
          editId={editId}
        />
      </Container>
    </>
  );
}

export default Dashboard;
