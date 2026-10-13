import { UploadCloud } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Loader from './loader'

export default function Sidebar({setCompany,setKpis}){

  const [companyName, setCompanyName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();   // Prevent page refresh
    if (!companyName || !file) {
        alert("Please enter company name and choose a PDF.");
        return;
    }

    const formData = new FormData();

    formData.append("company_name", companyName);
    formData.append("file", file);

    try {
        setLoading(true);
        const response = await axios.post(
            "http://127.0.0.1:8000/upload",
            formData
        );
        console.log(response.data);

        //sending data to parent
        setCompany(response.data.company);
        setKpis(response.data.kpis);

        setCompanyName("");
        setFile(null); 
        setLoading(false)

    } catch (err) {
        console.log(err);
    } finally {
        setLoading(false);
    }
  }

  return (
    <div className="w-72 bg-[#0D1321] border-r border-slate-800 p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">
        AI Investor
      </h1>

      <div className="border border-slate-700 rounded-2xl p-10 text-center hover:border-blue-500 cursor-pointer transition">
        <UploadCloud className="mx-auto" size={30} />
        <h2 className="mt-5 font-semibold text-[15px]">
          Upload Report
        </h2>
        <form onSubmit={handleUpload}>
          <input type="text" className="w-full mt-6 rounded-xl border border-slate-600 bg-[#182235] px-4 py-3 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40" placeholder="Company" value={companyName} onChange={(e) => {
            setCompanyName(e.target.value)
          }} />
          <label htmlFor="pdf-upload" className="w-full mt-5 flex items-center justify-center cursor-pointer rounded-xl border-2 border-dashed border-slate-600 bg-[#182235] py-4 text-white hover:border-indigo-500 hover:bg-[#1d2940] transition">
            {file ? file.name : "Choose PDF"}
          </label>
          <input type="file" id="pdf-upload" accept=".pdf" className="hidden text-xs w-full mt-6 rounded-xl border border-slate-600 bg-[#182235] px-4 py-3 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40" onChange ={(e) => {
            setFile(e.target.files[0])
          }}/>
          <button type="submit"  className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-white font-semibold text-lg shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] active:scale-[0.98]"> Click</button>
        </form>

        {loading && <Loader />}
       
      </div>

      <div className="mt-auto">
        <div className="bg-[#111827] rounded-2xl p-5 border border-slate-700">
          <h3 className="font-bold text-[15px]">
            AI Investor
          </h3>

          <p className="text-sm text-gray-400 mt-2 text-[12px]">
            Analyze financial reports using AI.
          </p>
        </div>
      </div>

    </div>
  );
}