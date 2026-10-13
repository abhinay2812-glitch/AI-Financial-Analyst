import React from 'react'
import Header from './header'
import KPICard from './KPIbox'
import CompanyAnalysis from './companyanalysis';

import {
  DollarSign,
  Landmark,
  BarChart3,
  Wallet,
  Building2,
  Scale,
} from "lucide-react";

const dashboard = ({Company,Kpis}) => {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-[#090D16] via-[#0F172A]to-[#111827]">
      <Header />

      <div className="grid grid-cols-3 gap-6">

        <KPICard
          title="Revenue"
          subtitle="Total company revenue"
          company= {Company}
          value={Kpis?.revenue}
          icon={<DollarSign size={22} />}
          color="#0EA5E9"
        />

        <KPICard
          title="Net Income"
          subtitle="Profit after expenses"
          company={Company}
          value={Kpis?.net_income}
          icon={<Landmark size={22} />}
          color="#10B981"
        />

        <KPICard
          title="Operating Income"
          subtitle="Operating earnings"
          company={Company}
          value={Kpis?.operating_income}
          icon={<BarChart3 size={22} />}
          color="#F59E0B"
        />

        <KPICard
          title="Operating Cash Flow"
          subtitle="Cash generated"
          company={Company}
          value={Kpis?.operating_cash_flow}
          icon={<Wallet size={22} />}
          color="#8B5CF6"
        />

        <KPICard
          title="Total Assets"
          subtitle="Assets owned"
          company={Company}
          value={Kpis?.total_assets}
          icon={<Building2 size={22} />}
          color="#06B6D4"
        />

        <KPICard
          title="Total Liabilities"
          subtitle="Outstanding liabilities"
          company={Company}
          value={Kpis?.total_liabilities}
          icon={<Scale size={22} />}
          color="#EC4899"
        />

      </div>

      <CompanyAnalysis Company = {Company} Kpis = {Kpis}/>

    </div>
  )
}

export default dashboard