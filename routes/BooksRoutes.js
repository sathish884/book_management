const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BooksControllers");
const auth = require("../middlware/auth");
const roleAuth = require("../middlware/role");

router.post("/", auth, roleAuth(["admin"]), bookController.createBook);        // Create
router.get("/", auth, roleAuth(["admin", "user"]), bookController.getAllBooks); // Get all
router.get("/:id", auth, roleAuth(["admin", "user"]), bookController.getBookById); // Get single
router.put("/:id", auth, roleAuth(["admin"]), bookController.updateBook);      // Update
router.delete("/:id", auth, roleAuth(["admin"]), bookController.deleteBook);   // Delete

module.exports = router;
