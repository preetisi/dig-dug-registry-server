module.exports = {
  HOST: "dig-bio-index.cxrzznxifeib.us-east-1.rds.amazonaws.com",
  USER: "diguser",
  PASSWORD: "type2diabetes",
  DB: "Dataregistry",
  dialect: "mysql",
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
