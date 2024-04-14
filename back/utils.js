const { TOKEN_INIT } = require("./constants");

const genToken = (len = 8) =>
  Math.random()
    .toString(36)
    .slice(TOKEN_INIT, TOKEN_INIT + len);

module.exports = {
  genToken,
};
