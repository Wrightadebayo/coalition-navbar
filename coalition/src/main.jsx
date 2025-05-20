import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const url = './api/people.json'

// fetch(url).then((resp)=>{
//   return resp.json()
// }).then((data)=>{
// console.log()
// })
// const url = 'https://course-api.netlify.app/api/javascript-store'
