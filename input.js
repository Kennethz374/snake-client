let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === '\u0003') { //control + c
      process.exit();
    } if (key === "w") {
      conn.write("Move: up");
    } if (key === "s") {
      conn.write("Move: down");
    } if (key === "a") {
      conn.write("Move: left");
    } if (key === "d") {
      conn.write("Move: right");
    } if (key === "p") {
      conn.write("Say: SUP?");
    }

  });
  stdin.resume();
  return stdin;
};//stdin setup

module.exports = { setupInput };