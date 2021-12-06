function decoreateHtmlResponse(PAGE_TITLE) {
  return function (req, res, next) {
    (res.locals.html = true),
      (res.locals.title = `${PAGE_TITLE} - ${process.env.APPLICATION_NAME}`);
    next();
  };
}

module.exports = decoreateHtmlResponse;
