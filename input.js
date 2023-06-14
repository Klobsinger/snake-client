let connection;
const constants = require("./constants");
const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }  else if (constants[data]) {
    connection.write(constants[data]);
  }
 
}
module.exports = {
setupInput
};