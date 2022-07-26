const path = require('path')
const fs = require('fs')
const express = require('express');
const mongoose = require('mongoose');
const React = require('react')
const ReactDOMServer = require('react-dom/server')


const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('./build'));

const dbURI = 'mongodb+srv://Charles-Eguale:14032001BIRTH@cluster0.hs0dw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)}))
  .catch((error : Error) => console.log( error, 'database failed to connect'));


// app.get('/', (req, res) => {
//   const app = ReactDOMServer.renderToString(<App />);
//   const indexFile = path.resolve('./build/index.html');

//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });