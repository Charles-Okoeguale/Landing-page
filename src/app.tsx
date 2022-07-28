import path from 'path'
import fs from 'fs'
import express from 'express'
import {monmodel} from './db/index'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import cors from 'cors'
import dotenv  from "dotenv"


dotenv.config()

const PORT = process.env.PORT
const app = express();


app.use(express.json());
app.use(cors())
app.use(express.static('public'));
app.use(express.static('./build'));



app.post('/feedback',  async (req: any, res: any) => {
  try {
        const data = new monmodel({
          name: req.body.input.name,
          email: req.body.input.email,
          feedback: req.body.input.feedback
        })
           
          // await data.save().then(() => {
          // console.log('feedback saved to database')
          // })
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
//   const landingpage = ReactDOMServer.renderToString(<App />);
//   const indexFile = path.resolve('./build/index.html');

//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${landingpage}</div>`)
//     );
//   });
// });