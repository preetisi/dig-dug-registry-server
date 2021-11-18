module.exports = app => {
    const datasets = require("../controllers/userdatareg.controller.js");
    const userprofile = require("../controllers/userprofile.controller.js");

    var router = require("express").Router();

    // Create a new Dataset
    router.post("/", datasets.create);

    // Retrieve all Datasets
    router.get("/", datasets.findAll);

    // Retrieve all published datasets
    router.get("/published", datasets.findAllPublished);

    // Retrieve all datasets for given user
    //router.get("/:username", datasets.findAllDatasetsPerUser);

    // Retrieve a single dataset with datasetid
    router.get("/:id", datasets.findOne);

    // Update a dataset with username
    router.put("/:datasetid", datasets.update);

    // Delete a dataset with datasetid
    router.delete("/:datasetid", datasets.delete);

    // Delete all Datasets
    router.delete("/", datasets.deleteAll);

    //create new user profile
    router.post("/userprofile", userprofile.create);

    // Retrieve all Users
    router.get("/userprofile", userprofile.findAll);

    // Update a user profile using a userid
    router.put("/:userid", userprofile.update);

    // Delete a user profile with userid
    router.delete("/:userid", userprofile.delete);

    app.use('/api/datasets', router);

};