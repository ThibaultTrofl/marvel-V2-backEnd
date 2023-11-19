const renameKeyName = (data) => {
  const output = data.map((s) => {
    if (s.hasOwnProperty("title")) {
      s.name = s.title;
      delete s.title;
    }
    return s;
  });
  return output;
};

module.exports = { renameKeyName };
