import logo from "../../assets/logo.png"

export default function TopBar({ onLogin = () => {} }) {
  return (
    <header className="flex items-center justify-center mt-3">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-xl border border-gray-300 bg-gray-200 px-6 shadow-md">
        <a href="#" className="text-lg font-semibold text-gray-900">
          <img src={logo} alt="logo" className="h-13 w-auto object-contain" />
        </a>

        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <li><a className="transition-colors hover:text-gray-900" href="#">Home</a></li>
            <li><a className="transition-colors hover:text-gray-900" href="#">Creator</a></li>
            <li><a className="transition-colors hover:text-gray-900" href="#">About</a></li>
          </ul>
          <button
            type="button"
            onClick={onLogin}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  )
}
