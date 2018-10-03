const express = require('express');
const exphbs  = require('express-handlebars');

const aasa = {
  applinks: {
    apps: [],
    details: [
      {
        appID: process.env.APP_ID,
        paths: [ "*" ]
      }
    ]
  }
};

const PORT = 8080;

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/.well-known/apple-app-site-association', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(aasa));
});

app.get('/app.html', function (req, res) {
  res.render('app');
});

app.listen(process.env.PORT || PORT, function () {
  console.log('Running on http://localhost:' + PORT);
});
