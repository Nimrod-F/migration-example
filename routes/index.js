const personController = require("../controllers").person;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  app.post("/api/person", personController.create);
  app.get("/api/persons", personController.list);
  app.get("/api/person/:personId", personController.retrieve);
  app.put("/api/person/:personId", personController.update);
  app.delete("/api/person/:personId", personController.delete);
};