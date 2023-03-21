const globalCss = require('./src/styles/global.css')

exports.onClientEntry = () => {
  if (process.env.NODE_ENV === "development") return;
  if (
    process.env.MAINTENANCE_MODE === "true" &&
    !window.location.pathname.includes("/maintenance")
  ) {
    window.location.href = "/maintenance";
  }
};

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (process.env.NODE_ENV === "development") return;
  if (
    process.env.MAINTENANCE_MODE === "true" &&
    !location.pathname.includes("/maintenance")
  ) {
    window.location.href = "/maintenance";
  }
};
