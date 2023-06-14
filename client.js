// establishes a connection with the game server
const net = require("net");
const constants = require("./constants"); // importing constants.js object

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP, // using the important object rather then directly having values here
    port: constants.PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data' , (data) => {
    console.log('Server says:', data);
  });
  conn.on('connect' ,() => {
    console.log('Successfully connected to game server'); // upon connecting to the server logs a message
    conn.write(constants.Name);  // sends the server the name from my constants object
  });
  
  return conn;
};
module.exports = {
  connect
};