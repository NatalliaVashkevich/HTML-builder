const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;
const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath);

stdout.write('Hi! Would you like to write some words about yourself?\n If you want to exit, write "exit"\n');

const input = readline.Interface(stdin);

input.on('line', (data) => {
  if(data === 'exit') {
    process.exit();
  } 
  writeStream.write(data);
});
process.on('exit', () => stdout.write('Bye!'));