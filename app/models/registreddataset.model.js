// This defines registered dataset for a user
module.exports = (sequelize, Sequelize) => {
    const RegisteredDataset = sequelize.define("registereddataset", {
        emailid: {
            type: Sequelize.STRING
        },
        publication: {
            type: Sequelize.STRING
        },
        phenotype: {
            type: Sequelize.STRING
        },
        ancestry: {
            type: Sequelize.STRING
        },

        technology: {
            type: Sequelize.STRING
        },
        dichotomous: {
            type: Sequelize.BOOLEAN
        },
        continuous: {
            type: Sequelize.BOOLEAN
        },
        case: {
            type: Sequelize.INTEGER
        },
        control: {
            type: Sequelize.INTEGER
        },
        samplesize: {
            type: Sequelize.INTEGER
        },
    });
    return RegisteredDataset;
};

// username: this.dataset.emailid,
//     publication: this.dataset.publication,
//         phenotype: this.dataset.phenotype,
//             ancestry: this.dataset.ancestry,
//                 technology: this.dataset.technology,
//                     dichotomous: this.dataset.dichotomous,
//                         continuous: this.dataset.continuous,
//                 case: this.dataset.case,
//     control: this.dataset.control,
//         samplesize: this.dataset.samplesize