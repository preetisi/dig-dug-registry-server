// This defines registered dataset for a user
module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define("userprofile", {
        userid: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        institute: {
            type: Sequelize.STRING
        }
    });

    return UserProfile;
};
