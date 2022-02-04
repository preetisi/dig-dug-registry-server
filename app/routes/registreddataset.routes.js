module.exports = app => {
    const registereddatasets = require("../controllers/registreddataset.controller.js");

    var router = require("express").Router();

    // Create a new Dataset
    router.post("/", registereddatasets.create);

    // Retrieve all Datasets
    router.get("/", registereddatasets.findAll);



    // Retrieve all datasets for given user
    //router.get("/:username", datasets.findAllDatasetsPerUser);

    // Retrieve a single dataset with datasetid
    router.get("/:emailid", registereddatasets.findOne);

    // Update a dataset with username
    router.put("/:id", registereddatasets.update);

    // Delete a dataset with datasetid
    router.delete("/:id", registereddatasets.delete);

    // Delete all Datasets
    router.delete("/", registereddatasets.deleteAll);



    app.use('/api/registereddatasets', router);

};