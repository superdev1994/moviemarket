const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.json());

const trending = require('./routes/API/movie_API/trending');
const movie = require('./routes/API/movie_API/movie');
const tv = require('./routes/API/movie_API/tv');

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "POST, GET, HEAD, DELETE, PUT, OPTIONS")
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

server.use('/', trending);
server.use('/movie', movie);
server.use('/tv', tv);

// production
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('frontend-movie-app/build'));
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend-movie-app', 'build', 'index.html'));
  });
}

server.listen(PORT, () => console.log(`listening on port: ${PORT}`));











