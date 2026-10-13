import { TriangleAlert } from "lucide-react";
import { Check } from "lucide-react";

const risks = [
  "Macroeconomic uncertainty may reduce demand.",
  "Currency fluctuations affect international revenue.",
  "Competitive pricing pressures continue.",
  "Supply chain disruptions remain a risk.",
];

export default function RiskCard({risks}) {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 border border-slate-700 flex-1">
      <div className="flex items-center gap-2 mb-6">
        <TriangleAlert className="text-red-400" size={22} />
        <h2 className="text-xl font-semibold text-red-400 text-[18px]">
          Top Risk Factors
        </h2>
      </div>

      <ul className="space-y-8">
        {risks?.map((risk, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <TriangleAlert
              size={26}
              className="text-red-400 mt-1 flex-shrink-0"
            />
            <p className="text-3xl leading-relaxed text-slate-300 text-sm">
              {risk}
            </p>
          </li>
        ))}

      </ul>
    </div>
  );
}