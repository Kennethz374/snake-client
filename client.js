const net = require('net');

const connect = function() {

  
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
    
  });
  // conn.on('connect', () => {
  //   setInterval (() => {
  //     conn.write("Move: up");}, 50);
  // });//movement

  conn.on('connect', () => {
    conn.write('Name: KEN');
  });//print out name sending server message

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });///print connecting successfully message

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });///catch server message

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };