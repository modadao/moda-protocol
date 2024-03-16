const fs = require("fs");
const path = require("path");
// const { execSync } = require('child_process');

const fileName = "addresses.json";
const filePath = path.join(__dirname, fileName);
const addresses = process.argv.slice(2);

let addressesData = { addresses: [] };
if (fs.existsSync(fileName)) {
  const content = fs.readFileSync(fileName, "utf-8");
  addressesData = JSON.parse(content);
}

addressesData.addresses.push(...addresses);
addressesData.length = addressesData.addresses.length;

fs.writeFileSync(filePath, JSON.stringify(addressesData, null, 2), "utf-8");

// try {
//   execSync(
//     'forge script script/AddVerifiedRoles.s.sol --rpc-url rpcUrl --broadcast',
//     {
//       encoding: 'utf-8',
//       cwd: path.resolve(__dirname, '../../../'),
//       stdio: 'inherit',
//     },
//   );
//   console.log('executing');
// } catch (error) {
//   console.error('Error executing Foundry script:', error);
// }
