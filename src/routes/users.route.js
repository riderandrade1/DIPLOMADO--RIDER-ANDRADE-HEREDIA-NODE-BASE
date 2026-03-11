import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUsersPagination
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "API Users Diplomado Backend",
    endpoints: [
      "GET /api/users",
      "GET /api/users/:id",
      "POST /api/users",
      "PUT /api/users/:id",
      "DELETE /api/users/:id",
      "GET /api/users/list/pagination"
    ]
  });
});

router.get("/api/users", getUsers);

router.get("/api/users/:id", getUserById);

router.post("/api/users", createUser);

router.put("/api/users/:id", updateUser);

router.delete("/api/users/:id", deleteUser);

router.get("/api/users/list/pagination", getUsersPagination);

export default router;
