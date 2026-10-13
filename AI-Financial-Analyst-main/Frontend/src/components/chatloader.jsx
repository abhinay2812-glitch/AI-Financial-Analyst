import React from 'react'
import { Bot } from "lucide-react";

const chatloader = () => {
  return (
    <div className="flex gap-3 mb-6 animate-fadeIn">

      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
        <Bot size={20} />
      </div>

      <div className="bg-[#1F2937] rounded-2xl rounded-tl-sm px-5 py-4 max-w-[70%]">

        <p className="text-sm text-slate-300 mb-4">
          AI is analyzing the annual report...
        </p>

        <div className="flex gap-2">

          <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"></span>

          <span
            className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>

        </div>

      </div>

    </div>
  )
}

export default chatloader
