// This defines registered dataset for a user
module.exports = (sequelize, Sequelize) => {
    const Dataintake = sequelize.define("dataintake", {
        username: {
            type: Sequelize.STRING
        },
        datasetname: {
            type: Sequelize.STRING
        },
        dataset_id: {
            type: Sequelize.STRING
        },

        status: {
            type: Sequelize.STRING
        },
        PI: {
            type: Sequelize.STRING
        },
        origin: {
            type: Sequelize.STRING
        },

        Notes: {
            type: Sequelize.STRING
        },
    });

    return Dataintake;
};
