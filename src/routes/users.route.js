import { Router } from "express";
import { getUsers, getUserById, getUsersPagination } from "../controllers/user.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "API Users Diplomado Backend",
    endpoints: [
      "/api/users",
      "/api/users/:id",
      "/api/users/list/pagination"
    ]
  });
});

router.get("/api/users", getUsers);

router.get("/api/users/:id", getUserById);

router.get("/api/users/list/pagination", getUsersPagination);

export default router;