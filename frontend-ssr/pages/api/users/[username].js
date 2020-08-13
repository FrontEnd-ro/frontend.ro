export default (req, res) => {
  const { username } = req.query;

  if (username === 'bob') {
    res.statusCode = 200;
    res.json({ name: 'Bob Doe' });
  } else if (username === 'error') {
    throw 'DANGER!';
  } else {
    res.statusCode = 404;
    res.end();
  }
};
