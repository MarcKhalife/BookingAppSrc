module.exports = app => {
    const controller = require("../controllers/controller.js");
  
    var router = require("express").Router();

    router.get("/", controller.getAll);

    router.post("/", controller.create);

    router.delete("/:id", controller.delete);

    router.get("/questions", controller.questions);
  
    app.use('/', router);
  };