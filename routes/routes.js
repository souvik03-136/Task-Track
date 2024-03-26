const { Router } = require("express");
const taskController = require("../app/controller/task.controller");
const router = Router();

router.get("/", taskController.index);
router.post("/create", taskController.create);
router.put("/update/:id", taskController.update);
router.delete("/delete/:id", taskController.destroy);
router.delete("/delete-all", taskController.deleteAll);

module.exports = router;
