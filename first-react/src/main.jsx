import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style.css"


function Header() {
  return (
    <div className="header">
      <img src="/atom.png" alt="" />
      <nav className="navBar">
        <ul>
          <li>Pricing</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

function MainContent() {
  return (
    <div className="mainContent">
      <h1>The Reasons I want to learn React!</h1>
      <ol>
        <li>  React is popular library</li>
        <li>  I am more likely get a job as a developer</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
