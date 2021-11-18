const db = require("../models");
const UserProfiles = db.userprofiles;
const Op = db.Sequelize.Op;

// Create and Save a new Dataset
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userid) {
        res.status(400).send({
            message: "Post Content - userid- can not be empty!"
        });
        return;
    }

    // Create a User Profile for a user
    const userprofile = {
        userid: req.body.userid,
        password: req.body.password,
        email: req.body.email,
        institute: req.body.institute,
    };

    // Save user dataset in the database
    UserProfiles.create(userprofile)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating an entry for the new user profile."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const userid = req.query.userid;
    console.log("userid", userid)
    var condition = userid ? { userid: { [Op.eq]: `${userid}` } } : null;

    UserProfiles.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user profile for given userid."
            });
        });

};

// // Find all Datasets for a given user
// exports.findAllDatasetsPerUser = (req, res) => {
//     const username = req.query.username;
//     var condition = username ? { username: { [Op.eq]: `%${username}%` } } : null;

//     UserDataReg.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || `Some error occurred while retrieving Datasets for user=${username}.`
//             });
//         });
// };

// Find a single user with an userid
exports.findOne = (req, res) => {
    const userid = req.params.userid;

    UserProfiles.findByPk(userid)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User profile with userid=${userid}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + userid
            });
        });
};

// Update a User profile by the userid in the request
exports.update = (req, res) => {
    const userid = req.params.userid;

    UserDataReg.update(req.body, {
        where: { userid: userid }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dataset was updated successfully."
                });
            } else {

                res.send({
                    message: `Cannot update User profile with id=${userid},. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Profile with id=" + userid
            });
        });
};

// Delete a Dataset with the specified id in the request
exports.delete = (req, res) => {
    const userid = req.params.userid;

    UserDataReg.destroy({
        where: { userid: userid }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User profile was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${userid}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Dataset with id=" + userid
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    UserProfiles.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} User profiles were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};




