const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === '\u0003') { //control + c
      process.exit();
    }});
  stdin.resume();
  return stdin;
};//stdin setup

module.export = { setupInput };