const crypto = require('crypto');

// соль
const SALT = 'Кщьфт';

function generateHash(pass) {
  return crypto.createHmac('sha256', SALT)
    .update(pass)
    .digest('hex');
}

console.log(generateHash('pass'));