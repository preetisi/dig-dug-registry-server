// This defines registered dataset for a user
module.exports = (sequelize, Sequelize) => {
    const RegisteredUser = sequelize.define("registreduser", {
        emailid: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        instituition: {
            type: Sequelize.STRING
        },

    });
    return RegisteredUser;
};

