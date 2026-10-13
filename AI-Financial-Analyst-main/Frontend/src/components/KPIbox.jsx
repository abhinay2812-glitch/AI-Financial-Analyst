import { motion } from "framer-motion";
import Card from './glasseffect'

export default function KPICard({title,subtitle,company,value,icon,color}) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center">
         <div>
          <h2 className="text-sm uppercase text-gray-400 font-semibold text-[12px]">
            {title}
          </h2>

          <p className="text-xs text-gray-500 mt-1 text-[10px]">
            {subtitle}
          </p>
        </div>

        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color }}>
          {icon}
        </div>
      </div>

      <div className="mt-8 flex justify-between text-[12px]">
        <span className="font-semibold">
          {company}
        </span>
        <span className="text-xl font-bold text-[12px]">
          {value}
        </span>
      </div>

      <div className="h-1 rounded-full mt-5" style={{ backgroundColor: color }}/>
    </Card>
  );
}