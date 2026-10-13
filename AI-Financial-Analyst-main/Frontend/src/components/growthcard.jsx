import { TrendingUp } from "lucide-react";
import { Check } from "lucide-react";

export default function GrowthCard({growth}) {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 border border-slate-700 flex-1">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-emerald-400" size={22} />
        <h2 className="text-xl font-semibold text-emerald-400 text-[18px]">
          Top Growth Drivers
        </h2>
      </div>

      <ul className="space-y-8">
        {growth?.map((factor, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <Check
              size={28}
              className="text-emerald-400 mt-1 flex-shrink-0"
            />
            <p className="text-3xl leading-relaxed text-sm text-slate-300">
              {factor}
            </p>
          </li>
        ))}

      </ul>

    </div>
  );
}