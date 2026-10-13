import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function ChatInput({Company,dataChat,setchatloading}){
  const [chat_question,set_chat_question] = useState("")
  

  const sendMessage = async () => {
      if (!Company) {
          alert("Please upload a report first.");
          return;
      }

      if (!chat_question.trim()) {
          return;
      }

      const formData = new FormData();

      formData.append("company_name", Company);
      formData.append("question", chat_question);

      try {
        dataChat("")
          setchatloading(true)
          const response = await axios.post(
              "http://127.0.0.1:8000/chat",
              formData
          );
          console.log(response.data);
          dataChat(response.data.answer)
          set_chat_question("");
          setchatloading(false)

      } catch (err) {
          console.error(err);

      }
    }

  return (
    <div className="border-t border-slate-700 p-5 flex gap-2">

      <div className="flex items-center bg-[#1F2937] rounded-xl px-4 w-[30%]">
        <div className="flex-1 bg-transparent outline-none py-4 text-[15px]">
          {Company}
        </div>
      </div>

      <div className="flex items-center bg-[#1F2937] rounded-xl px-4">
      <input type="text"
          placeholder="Ask revenue, risks..."
          className="flex-1 bg-transparent outline-none py-4 text-[15px]" value={chat_question} onChange={(e) => {
            set_chat_question(e.target.value)
          }}/>

        <button className=" w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition" onClick={sendMessage}>
          <SendHorizontal size={20} />
        </button>
      </div>

    </div>
  );
}