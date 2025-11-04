import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import Item from "../models/Item.js";

const router = express.Router();

// GET semua item milik user login
router.get("/", verifyToken, async (req, res) => {
  const items = await Item.findAll({ where: { userId: req.user.id } });
  res.json(items);
});

// POST tambah item
router.post("/", verifyToken, async (req, res) => {
  const { title, description } = req.body;
  await Item.create({ title, description, userId: req.user.id });
  res.json({ message: "Item ditambahkan" });
});

// PUT update item
router.put("/:id", verifyToken, async (req, res) => {
  await Item.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Item diperbarui" });
});

// DELETE hapus item
router.delete("/:id", verifyToken, async (req, res) => {
  await Item.destroy({ where: { id: req.params.id } });
  res.json({ message: "Item dihapus" });
});

export default router;
