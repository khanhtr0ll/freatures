const authorcontroller = require("../controllers/authorcontroller")

const router = require("express").Router()
router.post("/",authorcontroller.addauthor)
router.get("/",authorcontroller.getallauthor)
router.get("/:id",authorcontroller.getanauthor)
route.put("/:id",authorcontroller.updatauthor)
route.delete("/:id",authorcontroller.deleteauthor)
module.exports = router