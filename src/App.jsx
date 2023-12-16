import { useState } from 'react'
import './App.css'
import Chat from './component/Chat'
import Sidebar from './component/Sidebar'
import Chatlist from './component/Chatlist'
import Team from './component/Team'
import Header1 from './component/Header1'
import Header2 from './component/Header2'
import Header3 from './component/Header3'
import { conversations } from './component/conversations'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Sidebar />

        <div className="chatList">
          <Header1 />
          <Chatlist conversations={conversations} />
        </div>

        <div className="desktop-1-child" />

        <div className="message-panel">
          <Header2 />
          <Chat />
        </div>

        <div className="desktop-2-child" />
        <div className="directory">
          <Header3 />
          <Team />
        </div>


      </div>

    </>
  )
}

export default App
