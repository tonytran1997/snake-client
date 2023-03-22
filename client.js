const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,  // IP address here,
    port: PORT, // PORT number here,
  });

  conn.on('connect', (connect) => {
    console.log('Snake Game Server says >>');
  });

  conn.on('connect', () => {
    conn.write('Name: Tony');
  });

  conn.on('data', (data) => {
    console.log('You are finished.');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };