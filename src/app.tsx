import path from 'path'
import fs from 'fs'
import express from 'express'
import mongoose from 'mongoose'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import cors from 'cors'

const PORT = 8000;
const app = express();


app.use(express.json());
app.use(cors())
app.use(express.static('public'));
app.use(express.static('./build'));


const dbURI = 'mongodb+srv://Charles-Eguale:14032001BIRTH@cluster0.hs0dw.mongodb.net/serokell?retryWrites=true&w=majority'
const database: any = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('database connected'))
.catch((err) => console.log('check for error', err))


const schema = {
  name: String,
  email: String,
  feedback: String
}

const monmodel = mongoose.model('message', schema as any)

app.post('/feedback',  async (req: any, res: any) => {
  try {
          const data = new monmodel({
            name: req.body.input.name,
            email: req.body.input.email,
            feedback: req.body.input.feedback
          })
           
            await data.save().then(() => {
            console.log('feedback saved to database')
          })
          console.log(req.body.input) 
          res.status(200, 'OK')

      } catch (error) { 
              console.log(error)
              res.status(501)
      }
})


app.listen(PORT, () => {
  console.log(`server listening on Port ${PORT}`)
})











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