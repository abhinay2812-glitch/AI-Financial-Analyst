import GrowthCard from "./growthcard";
import RiskCard from "./Riskcard";

export default function CompanyAnalysis({Company,Kpis}) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Qualitative Intelligence Deep-Dive
      </h2>

      <div className="bg-[#111827] rounded-3xl border border-slate-700 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">
              {Company}
            </h1>
          </div>

          <select className=" bg-[#1F2937] px-4 py-2 rounded-xl border border-slate-600 text-[15px]">
            <option>Apple</option>
            <option>Microsoft</option>
            <option>Google</option>
            <option>NVIDIA</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <GrowthCard  growth = {Kpis?.growth_factors}/>
          <RiskCard risks = {Kpis?.risk_factors}/>
        </div>

      </div>

    </div>
  );
}