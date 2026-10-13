import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'
import ChatPanel from './components/chatpanel'


const App = () => {
  const [Company,setCompany] = useState("")
  const [Kpis,setKpis] = useState(null)
  return (
    <div className="h-screen flex bg-[#090D16] overflow-hidden">
      <Sidebar setCompany = {setCompany} setKpis = {setKpis}/>
      <Dashboard Company = {Company} Kpis = {Kpis} />
      <ChatPanel Company = {Company}/>
    </div>
  )
}

export default App