import { useState } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { php } from "@codemirror/lang-php"
import { oneDark } from "@codemirror/theme-one-dark"

export default function CodeEditor({ onRun }) {
  const [code, setCode] = useState("// escreva seu codigo aqui")

  const runCode = () => {
    try {
      const logs = []
      const originalLog = console.log
      console.log = (...args) => logs.push(args.join(" "))
      // eslint-disable-next-line no-new-func
      new Function(code)()
      console.log = originalLog
      const result = logs.join("\n") || "Sem saida do console."
      if (onRun) onRun(result)
    } catch (err) {
      if (onRun) onRun(`Erro: ${err.message}`)
    }
  }

  return (
    <div className="flex-1 h-[80vh] rounded-2xl border border-slate-200 bg-slate-900/95 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
        <h2 className="text-sm font-semibold text-white">Editor</h2>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
          Code
        </span>
      </div>

      <CodeMirror
        value={code}
        height="calc(80vh - 140px)" // ajusta a altura para caber o terminal
        width="100%"
        extensions={[javascript({ jsx: true }), php()]}
        theme={oneDark}
        onChange={(value) => setCode(value)}
      />

      <div className="border-t border-slate-800 px-5 py-3">
        <button
          type="button"
          onClick={runCode}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Run Code
        </button>
      </div>
    </div>
  )
}
