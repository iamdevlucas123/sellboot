import TopBar from "../components/topbar"
import MainText from "../components/mainText"
import Description from "../components/description"
import DemonstrateVideo from "../components/demonstrateVideo"
import Profile from "../components/profile"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-400 via-orange-200 to-white pt-6">
      <TopBar />
      <MainText />
      <DemonstrateVideo />
      <Description />
      <Profile/>
    </div>
  )
}
