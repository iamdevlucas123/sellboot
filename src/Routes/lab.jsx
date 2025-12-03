import { useState } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { php } from "@codemirror/lang-php"
import { oneDark } from "@codemirror/theme-one-dark"

export default function Lab() {
  const [code, setCode] = useState("// escreva seu codigo aqui")

  return (
    <div className="min-h-screen ">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Lab</h1>
        <CodeMirror
          value={code}
          height="400px"
          extensions={[javascript({ jsx: true }), php()]}
          theme={oneDark}
          onChange={(value) => setCode(value)}
        />
      </div>
    </div>
  )
}
