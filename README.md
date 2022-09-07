# genshin-library
- My blog where I post everything I've learned about code.

## Setting up:
- install npm
- install these dependencies:
  - luxon (for time formatting)
  - helmet (security)
  - express-validator (form validation/sanitization)
  - async (so we can run multiple async funcs at the same time or sequentially)
  - compression (to compress http response time)
  - mongoose (ORM for mongoDB)

## Resources:
- [Passing dates in URL](https://tsmx.net/express-pass-dates-in-url-with-regex-validation/)
- [Passing names in URL](https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters)
- [Using axios in Node for API calls](https://stackoverflow.com/questions/61119010/calling-a-third-party-api-in-nodejs)
- [Inheritance in EJS](https://www.anycodings.com/1questions/4858441/how-to-use-block-inheritance-in-ejs-templates)
- [Caching API responses with Redis](https://betterprogramming.pub/how-to-cache-api-requests-with-redis-and-node-js-cba883385e7)

## What I learned:
- using axios for API calls
- using async/await instead of callbacks
- you use req.{query} to retrieve values for URL params
- passing a single value to a URL is simple: href to a URL that has the value name, then use router.params('value_name', () => ...)
- to access images, add `/icon` after the data you're looking for
