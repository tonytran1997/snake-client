const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: '172.24.150.191',  // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", (connect) => {
    // code that does something when the connection is first established
    console.log('Connected to server!')
  });

  conn.on("connect", (connect) => {
    console.log("Name: T.T")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;