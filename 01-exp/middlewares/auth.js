const secretToken = process.env.SECRET_TOKEN

function auth(req, res, next) {
  console.log(req.headers);
  const token = req.headers['x-secret-token-x']

  if (token.trim() === secretToken.trim()) {
    next()
  } else {
    res.status(403)
    res.end('forbidden')
  }
}

module.exports = auth