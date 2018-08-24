// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://dcc57c7d555045a18247d77c342e9d03@sentry.io/1268383"
  // ).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};
