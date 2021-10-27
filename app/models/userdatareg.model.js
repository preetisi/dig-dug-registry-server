// This defines registered dataset for a user
module.exports = (sequelize, Sequelize) => {
    const UserDataReg = sequelize.define("userdatareg", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        datasetid: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        whereFrom: {
            type: Sequelize.STRING
        },
        urgency: {
            type: Sequelize.STRING
        },
        summary: {
            type: Sequelize.STRING
        },
    });

    return UserDataReg;
};
