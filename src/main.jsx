import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


// const express = require('express')
// const cors = require('cors')
// const app = express();

// app.use(cors)({
//   origin: '*',
//   method: ["GET"]
// })


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
