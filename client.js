// establishes a connection with the game server
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data' , (data) => {
    console.log('Server says:', data);
  });
  conn.on('connect' ,() => {
    console.log('Successfully connected to game server')
    conn.write('Name: KDL')
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 2000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 3000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 4000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 5000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 6000);
 })
  
  return conn;
};
module.exports = {
  connect
};