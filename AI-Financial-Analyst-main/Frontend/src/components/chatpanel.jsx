import { useState } from 'react';
import ChatInput from './chatinput';
import Chatloder from './chatloader'
export default function ChatPanel({Company}) {
  const [data_chat,setdata_chat] = useState(<>
              👋 Hello! I'm your AI Financial Analyst.
              <br /><br />
              Upload an annual report and ask me anything.
              <br /><br/>
              Examples:
              <br />
              • Revenue Growth
              <br />
              • Risk Factors
              <br />
              • Cash Flow
              <br />
              • Key Highlights </>)
    const [chatloading,setchatloading] = useState(false)
  return (
    <div className="w-96 border-l border-slate-800 bg-[#0D1321] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold text-[20px]">
          AI Analyst
        </h2>

        <p className="text-gray-400 text-sm mt-1 text-[15px]">
          Ask questions about your uploaded reports.
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">

        {/* AI Message */}
        <div className="flex">
          <div className="bg-[#1F2937] rounded-2xl rounded-tl-sm p-4 max-w-[90%]">
            <p className="text-sm leading-7">
              {data_chat}
              {chatloading && <Chatloder/>}
            </p>
          </div>
        </div>
      </div>

      <ChatInput Company = {Company} dataChat = {setdata_chat} setchatloading = {setchatloading} />

    </div>
  );
}