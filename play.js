const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());

/*const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  const handleUserInput = function () {
    // your code here
  };

  return stdin;
};*/

/* establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.24.150.191',  // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", (connect) => {
    // code that does something when the connection is first established
    console.log('Connected to server!')
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();*/