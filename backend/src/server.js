const app = require("./app");
const env = require("./config/env");

const connectDB = require("./database/mongodb");
const createAdmin = require("./seeders/adminSeeder");

const startServer = async () => {
  try {
    await connectDB();
    await createAdmin();


    app.listen(env.PORT, () => {
      console.log("==================================");
      console.log(`🚀 Server running on Port ${env.PORT}`);
      console.log(`🌍 Environment : ${env.NODE_ENV}`);
      console.log("==================================");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();