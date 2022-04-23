import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import UserCard from './components/UserCard'
import TechList from './components/TechList'
import './index.css'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Header />
    <UserCard />
    <TechList />
  </React.StrictMode>
)


//30DaysOfReact:???
//ReactDOM.render(<Header />,  rootElement)