import { useState } from "react"
import CodeEditor from "../components/lab/Input"
import Summary from "../components/lab/summary"
import Output from "../components/lab/output"

export default function Lab() {
  const [output, setOutput] = useState("")

  return (
    <div className="flex gap-4 px-6 py-6">
      <Summary />
      <CodeEditor onRun={setOutput} />
      <Output value={output} />
    </div>
  )
}
