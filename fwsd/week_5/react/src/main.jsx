import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter} from "react-router-dom";
"Browser router wraps our application into a prebuilt"
"component that allows us to asign components to a route."
"it also gives the components the ability to link"
"to one another with out refreshing the state"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
)
