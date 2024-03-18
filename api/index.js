const server = require("./src/app.js");

require("dotenv").config();
const { PORT } = process.env;

server.listen(PORT || 3000, () => {
  console.log(`Server listening on port ${PORT || 3000}`);
});
