module.exports = app => {
    const registreduser = require("../controllers/registreduser.controller.js");

    var router = require("express").Router();

    // Create a new Dataset
    router.post("/", registreduser.create);

    // Retrieve all Datasets
    router.get("/", registreduser.findAll);



    // Retrieve all datasets for given user
    //router.get("/:username", datasets.findAllDatasetsPerUser);

    // Retrieve a single dataset with datasetid
    router.get("/:emailid", registreduser.findOne);

    // Update a dataset with username
    router.put("/:id", registreduser.update);

    // Delete a dataset with datasetid
    router.delete("/:id", registreduser.delete);

    // Delete all Datasets
    router.delete("/", registreduser.deleteAll);



    app.use('/api/registreduser', router);

};