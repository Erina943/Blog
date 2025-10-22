const express = require("express");

const router = express.Router();

const {
  blogList,
  blogDetail,
  blogCreate,
  blogUpdate,
  blogDelete,
} = require("../controllers/blogController");

const validateToken = require("../middleware/validateJwtToken");

// middleware that is specific to this router
router.use(validateToken);

// Get blogs
router.get("/", blogList);

// Get a blog
router.get("/:id", blogDetail);

// Create new blog
router.post("/", blogCreate);

// Update blog
router.put("/:id", blogUpdate);

router.delete("/:id", blogDelete);

module.exports = router;
