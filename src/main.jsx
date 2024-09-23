import React from "react"
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./Context/Cart.jsx";

ReactDom.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>

)
