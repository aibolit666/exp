function bodyParser(req, res, next) {
  if (req.headers["content-type"] === 'application/json') {
    let result = ''
    req.on('data', data => {
      result += data
    })

    req.on('end', () => {
      req.body = JSON.parse(result)
      next()
    })
  } else {
    next()
  }
}

module.exports = bodyParser