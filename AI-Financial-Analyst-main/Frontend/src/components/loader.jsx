import React from 'react'
import { LoaderCircle } from "lucide-react";


const loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div className="w-[480px] rounded-3xl border border-slate-700 bg-[#131B2B] shadow-2xl p-8">

        <div className="flex justify-center">
          <LoaderCircle
            size={55}
            className="text-blue-500 animate-spin"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mt-6">
          Analyzing Annual Report
        </h2>

        <p className="text-center text-slate-400 mt-3">
          Please wait while AI extracts financial insights...
        </p>

        <div className="mt-8 h-2 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-pulse"></div>
        </div>

        <div className="mt-8 space-y-4">

          <div className="flex justify-between">
            <span className="text-slate-300">
              Uploading Report
            </span>

            <span className="text-green-400">
              ✓
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              Creating Embeddings
            </span>

            <span className="text-blue-400 animate-pulse">
              Processing...
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              Building Vector Database
            </span>

            <span className="text-slate-500">
              Waiting...
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              Extracting KPIs
            </span>

            <span className="text-slate-500">
              Waiting...
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default loader
