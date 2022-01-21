const db = require("../models");
const UserDataReg = db.userdataregs;
const Op = db.Sequelize.Op;

// Create and Save a new Dataset
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({

            message: "Post Content - username- can not be empty!"
        });
        return;
    }

    // Create a Dataset for a user
    const userdataset = {
        username: req.body.username,


        dataset_id: req.body.dataset_id,

        status: req.body.status,

    };

    // Save user dataset in the database
    UserDataReg.create(userdataset)
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

// Retrieve all Datasets from the database.
exports.findAll = (req, res) => {
    const dataset_id = req.query.dataset_id;
    console.log("dataset id", dataset_id)
    var condition = dataset_id ? { dataset_id: { [Op.eq]: `${dataset_id}` } } : null;

    UserDataReg.findAll({ where: condition })
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

// Find all Datasets for a given user
exports.findAllDatasetsPerDatasetid = (req, res) => {
    const dataset_id = req.query.dataset_id;
    var condition = dataset_id ? { dataset_id: { [Op.eq]: `%${dataset_id}%` } } : null;

    UserDataReg.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Some error occurred while retrieving Datasets for dataset_id=${dataset_id}.`
            });
        });
};

// Find a single Dataset with an id
exports.findOne = (req, res) => {
    const id = req.params.dataset_id;

    UserDataReg.findAll(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Dataset with datasetid=${id}.`
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
    const id = req.params.dataset_id;

    UserDataReg.update(req.body, {
        where: { id: id }
    })
        .then(num => {

            if (num == 1) {
                res.send({
                    message: "Dataset was updated successfully."
                });
            } else {

                res.send({
                    message: `Cannot update Dataset with id=${id},. Maybe Dataset was not found or req.body is empty!`
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
    const id = req.params.dataset_id;

    UserDataReg.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dataset was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Dataset with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Dataset with id=" + id
            });
        });
};

// Delete all Datasets from the database.
exports.deleteAll = (req, res) => {
    UserDataReg.destroy({
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

// Find all published Datasets
exports.findAllPublished = (req, res) => {
    UserDataReg.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Datasets."
            });
        });
};


