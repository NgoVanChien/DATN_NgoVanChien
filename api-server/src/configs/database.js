const Logger = require("../helpers/logger");
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    Logger.info("connect database successfully!");
  } catch (error) {
    Logger.error("connect database failed!", error);
  }
};

const disconnect = async (cb) => {
  await mongoose.connection.close(null, cb && cb());
};

module.exports = { connect, disconnect };
