const app = require("./app");
const env = require("./config/env");

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log("==================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment : ${env.NODE_ENV}`);
  console.log(`📍 URL : http://localhost:${PORT}`);
  console.log("==================================");
});