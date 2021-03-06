const db = require("../models");
const RegisteredDataset = db.registreddataset;
const Op = db.Sequelize.Op;

// Create and Save a new Dataset
exports.create = (req, res) => {
    // Validate request
    if (!req.body.emailid) {
        res.status(400).send({

            message: "Post Content - email id - can not be empty!"
        });
        return;
    }

    // Create a Dataset for a user
    const userdataset = {
        emailid: req.body.emailid,
        publication: req.body.publication,
        phenotype: req.body.phenotype,
        ancestry: req.body.ancestry,
        technology: req.body.technology,
        dichotomous: req.body.dichotomous ? req.body.dichotomous : false,
        continuous: req.body.continuous ? req.body.continuous : false,
        case: req.body.case,
        control: req.body.control,
        samplesize: req.body.samplesize
    };

    // Save user dataset in the database
    RegisteredDataset.create(userdataset)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating an entry for the new dataset and user."
            });
        });
};

// Retrieve all Datasets from the database based on email id.
exports.findAll = (req, res) => {
    const emailid = req.query.emailid;
    console.log("email id", emailid)
    var condition = emailid ? { emailid: { [Op.eq]: `${emailid}` } } : null;

    RegisteredDataset.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving datasets for given user."
            });
        });
};


// Find a single Dataset with an id
exports.findOne = (req, res) => {
    const trackingid = req.params.id;

    RegisteredDataset.findByPk(trackingid)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Dataset with trackingid=${trackingid}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Dataset with id=" + id
            });
        });
};

// Update a Dataset by the datasetid in the request
exports.update = (req, res) => {
    const trackingid = req.params.id;

    RegisteredDataset.update(req.body, {
        where: { id: trackingid }
    })
        .then(num => {

            if (num == 1) {
                res.send({
                    message: "Dataset was updated successfully."
                });
            } else {

                res.send({
                    message: `Cannot update Dataset with id=${trackingid},. Maybe Dataset was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Dataset with id=" + id
            });
        });
};

// Delete a Dataset with the specified id in the request
exports.delete = (req, res) => {
    const trackingid = req.params.id;

    RegisteredDataset.destroy({
        where: { id: trackingid }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dataset was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Dataset with id=${trackingid}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Dataset with id=" + trackingid
            });
        });
};

// Delete all Datasets from the database.
exports.deleteAll = (req, res) => {
    RegisteredDataset.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Datasets were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all datasets."
            });
        });
};
