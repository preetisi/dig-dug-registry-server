// This defines registered dataset for a user
module.exports = (sequelize, Sequelize) => {
    const UserDataReg = sequelize.define("userdatareg", {
        username: {
            type: Sequelize.STRING
        },
        dataset_id: {
            type: Sequelize.STRING
        },

        status: {
            type: Sequelize.STRING
        },


    });
    return UserDataReg;
};
