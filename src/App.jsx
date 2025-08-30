import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboard from './pages/LeaderBoard'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Leaderboard />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
