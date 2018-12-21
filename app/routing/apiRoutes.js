const friends = require('../data/friends')

module.exports = function(app) {
  app.get('/api/friends', function( req, res ) {
    res.json(friends)
  })
  app.post('/api/friends', function( req, res ) {
    // NEED TO GRAB INFO FROM FORM TO ADD NEW FRIEND THEN 
    // MAKE COMPARISON AND RESPOND TO BROWSER WITH THE
    // CLOSEST FRIEND
  })
}