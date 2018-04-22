const Nightmare = require('nightmare');
var port = process.env.PORT || 5000;
const nightmare = Nightmare({ show: false });

// app.listen(port, function() {
//     console.log('Starting node.js on port ' + port)
//   })
const URL = 'http://blog.oscarmorrison.com/nightmarejs-on-heroku-the-ultimate-scraping-setup/';
console.log('Welcome to Nightmare scrape\n==========');

nightmare
    .goto(URL)
    .wait('.post-title')
    .evaluate(() => document.querySelector('.post-title').textContent)
    .end()
    .then((result) => {
        console.log(result);
        console.log('=========\nAll done');
    })
    .catch((error) => {
        console.error('an error has occurred: ' + error);
    })
    .then(() => (console.log('process exit'), process.exit()));
