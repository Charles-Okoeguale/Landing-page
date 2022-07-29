import path from 'path'
import fs from 'fs'
import express, {Request, Response} from 'express'
import {monmodel} from './db/index'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import cors from 'cors'
import dotenv  from "dotenv"
import App from '../../client/src/App'


dotenv.config()

const PORT = process.env.PORT
const app = express();


app.use(express.json());
app.use(cors())
app.use(express.static('./public'));



app.post('/feedback',  async (req: Request, res: Response) => {
  try {
        const data = new monmodel({
          name: req.body.input.name,
          email: req.body.input.email,
          feedback: req.body.input.feedback
        })
           
      await data.save()
      console.log('feedback saved to database')
      console.log(req.body.input) 
      res.send('ok').status(200)

    } catch (error) { 
          console.log(error)
          res.send('bad').status(500)
    }
})



app.listen(PORT, () => {
  console.log(`server listening on Port ${PORT}`)
})



// app.get('/', (req, res) => {
//   const app = ReactDOMServer.renderToString(React.createElement(App));
//   const indexFile = path.resolve('./public/index.html');

//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, something went wrong');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });



