let connection;
const constants = require("./constants");
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = function(data) {
  if (data === '\u0003') {   // checking if key is ctrl C then exiting the program if true
    process.exit();
  } else if (constants[data]) { // checking if the key pressed matches a key in the imported constants object
    if (data === '\u0065') { // if that key is 'e'
      const taunt = constants[data](); // assigns the result from the random taunt function from the constants object
      connection.write(taunt); // then writes that result to the server
    } else {
      connection.write(constants[data]); // if the key is not 'e' but matches a key in the constants object it writes the value (movement) to the server
    }
  }
};
module.exports = {
  setupInput
};