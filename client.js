// establishes a connection with the game server
const net = require("net");
const constants = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT 
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data' , (data) => {
    console.log('Server says:', data);
  });
  conn.on('connect' ,() => {
    console.log('Successfully connected to game server')
    conn.write(constants.Name)
 })
  
  return conn;
};
module.exports = {
  connect
};