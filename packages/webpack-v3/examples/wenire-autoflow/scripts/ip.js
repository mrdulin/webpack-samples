const os = require('os');
const networkInterfaces = os.networkInterfaces();

// console.log(networkInterfaces);

function getIPv4() {
  const networkInterfaceIds = Object.keys(networkInterfaces);
  let ip, name;
  for (let id of networkInterfaceIds) {
    const networkAddresses = networkInterfaces[id];
    for (let networkAddress of networkAddresses) {
      if (networkAddress.internal || networkAddress.family === 'IPv6') continue;
      ip = networkAddress.address;
      name = id;
    }
  }
  return { name, IPv4: ip };
}

const { name, IPv4 } = getIPv4();
console.log(name + ':' + IPv4);

module.exports = getIPv4;
