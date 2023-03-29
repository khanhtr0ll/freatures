
const bookcontroller = require("../controllers/bookcontroller")

const route = require("express").Router()
route.post("/",bookcontroller.addbook)
route.get("/",bookcontroller.getallbook)
route.get("/:id",bookcontroller.getabook)
route.put("/:id",bookcontroller.updatabook)
route.delete("/:id",bookcontroller.deletebook)
module.exports = route