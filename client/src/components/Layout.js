import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default ({ children, authenticated, currentUser }) => (
  <div>
    <Nav
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    <main className="container2">
    {children}
    </main>
    <Footer/>
  </div>
)