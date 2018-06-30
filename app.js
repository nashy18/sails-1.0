/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful,
 * such as when you deploy to a server, or a PaaS like Heroku.
 *
 * For example:
 *   => `node app.js`
 *   => `npm start`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *
 * The same command-line arguments and env vars are supported, e.g.:
 * `NODE_ENV=production node app.js --port=80 --verbose`
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/app.js
 */


// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);



// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
var sails;
var rc;
try {
  sails = require('sails');
  rc = require('sails/accessible/rc');
} catch (err) {
  console.error('Encountered an error when attempting to require(\'sails\'):');
  console.error(err.stack);
  console.error('--');
  console.error('To run an app using `node app.js`, you need to have Sails installed');
  console.error('locally (`./node_modules/sails`).  To do that, just make sure you\'re');
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error('If Sails is installed globally (i.e. `npm install -g sails`) you can');
  console.error('also run this app with `sails lift`.  Running with `sails lift` will');
  console.error('not run this file (`app.js`), but it will do exactly the same thing.');
  console.error('(It even uses your app directory\'s local Sails install, if possible.)');
  return;
}//-•

//This function will intiallise custom logic for setting up environment & tenant specific configuration
const customConfiguration = () => {
  //assigning app configuration based on environment

  const cliArgs = process.argv.slice(2),
    key = (cliArgs.length > 0) ? cliArgs[0] : null;
  let env = null;
  switch (key) {
    case "testing":
    case "test":
    case "tst":
    case "t":
      env = "testing";
      break;
    case "production":
    case "prod":
    case "prd":
    case "p":
      env = "production";
      break;
    case "stg":
    case "stag":
    case "staging":
    case "s":
      env = "staging";
      break;
    case "dev":
    case "development":
    case "d":
    default:
      env = "development";
      break;
  }

  const tenant = (cliArgs.length == 2) ? cliArgs[1] : "default";
  const appConfig = require("./config/custom/" + env)[env];

  //Validating tenant configuration exist or not
  if (!appConfig.tenantConfig[tenant]) {
    return console.error('\x1b[31m%s\x1b[0m', "Tenant configuration with value " + tenant + " not exits!");
  }

  //attaching global properties to sails object
  sails.appConfig = appConfig;
  sails.tenant = tenant;
  sails.appEnvironment = env;
  //It will be used to assign db connection string
  process.dbEndpoint = sails.appConfig.tenantConfig[sails.tenant].dbEndpoint;

  console.info("--------------------------------------------------------\n");
  console.info('\x1b[32m%s\x1b[0m', "Port: " + sails.appConfig.tenantConfig[sails.tenant].port + "\nEnvironment: " + env.toUpperCase() + "\nTenant: " + sails.tenant.toUpperCase() + "\n");
  console.info("----------------Application starting--------------------");
}

customConfiguration();

// Start server
sails.lift(rc('sails'));