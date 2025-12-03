import { useState } from "react"
import TopBar from "../components/Home/topbar"
import MainText from "../components/Home/mainText"
import Description from "../components/Home/description"
import DemonstrateVideo from "../components/Home/demonstrateVideo"
import Profile from "../components/Home/profile"
import AuthModal from "../components/Home/auth"

export default function Home() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-400 via-orange-200 to-white pt-6">
      <TopBar onLogin={() => setShowAuth(true)} />
      <MainText onLogin={() => setShowAuth(true)} />
      <DemonstrateVideo />
      <Description />
      <Profile/>
      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  )
}
