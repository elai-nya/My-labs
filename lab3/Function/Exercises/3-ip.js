'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip
    .split('.')
    .map((x) => Number(x))
    .reduce((acc, octet) => {
      return (acc << 8) + octet;
    }, 0);
};

module.exports = { ipToInt };
