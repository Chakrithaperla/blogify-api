import CreatePost from './pages/CreatePost'
import './App.css'

function App() {
  return (
    <div className="app-main">
      <nav className="nav-bar">
        <div className="logo-container">
          <span className="logo-text">BeatHub</span>
        </div>
      </nav>
      
      <main className="main-content">
        <CreatePost />
      </main>
    </div>
  )
}

export default App
