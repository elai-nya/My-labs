'use strict';

const methods = (iface) => {
  return Object.keys(iface)
    .filter((key) => {
      return typeof iface[key] === 'function';
    })
    .map((key) => [key, iface[key].length]);
};

module.exports = { methods };
