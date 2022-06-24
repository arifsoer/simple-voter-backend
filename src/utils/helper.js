const isNullOrEmptyString = (string) => {
  return string === "" || string === undefined || string === null;
};

module.exports = { isNullOrEmptyString };
