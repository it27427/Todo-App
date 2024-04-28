const getHomeController = (req, res) => {
  const test = '<h1>Hello from Home route</h1>';
  res.send(test);
  res.end();
};

module.exports = {
  getHomeController,
};
