module.exports = app => {
    const datasets = require("../controllers/userdatareg.controller.js");

    var router = require("express").Router();

    // Create a new Dataset
    router.post("/", datasets.create);

    // Retrieve all Datasets
    router.get("/", datasets.findAll);

    // Retrieve all published datasets
    router.get("/published", datasets.findAllPublished);

    // Retrieve a single dataset with username
    router.get("/:id", datasets.findOne);

    // Update a dataset with username
    router.put("/:id", datasets.update);

    // Delete a dataset with datasetid
    router.delete("/:datasetid", datasets.delete);

    // Delete all Datasets
    router.delete("/", datasets.deleteAll);

    app.use('/api/datasets', router);
};