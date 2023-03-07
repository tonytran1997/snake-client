const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,  // IP address here,
    port: PORT, // PORT number here,
  });

  conn.on('connect', (connect) => {
    console.log('Connected to server!')
  });

  conn.on('connect', (connect) => {
    conn.write('Name: Tony');
  });

  conn.on('data', (data) => {
    console.log('It is over!');
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };