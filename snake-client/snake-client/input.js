let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  const handleUserInput = function (key) {
    // your code here
    if (key === MOVE_UP_KEY) {
      conn.write('Move: up');
    }
    if (key === MOVE_LEFT_KEY) {
      conn.write('Move: left');
    }
    if (key === MOVE_DOWN_KEY) {
      conn.write('Move: down');
    } 
    if (key === MOVE_RIGHT_KEY) {
      conn.write('Move: right');
    }
  };

  return stdin;
};