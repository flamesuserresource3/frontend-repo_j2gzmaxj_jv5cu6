import React from 'react';
import { Users, Boxes, Shield, BarChart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Vendor onboarding',
    desc: 'Self-serve signups with KYC, tiered commissions, payouts, and roles.',
  },
  {
    icon: Boxes,
    title: 'Catalog & inventory',
    desc: 'Bulk import, variants, real-time stock sync, and multi-location support.',
  },
  {
    icon: Shield,
    title: 'Trust & compliance',
    desc: 'Dispute handling, moderation tools, and audit-ready data trails.',
  },
  {
    icon: BarChart,
    title: 'Analytics & insights',
    desc: 'GMV, conversion, and vendor performance dashboards out of the box.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to run a marketplace</h2>
          <p className="mt-3 text-slate-600">
            Power vendor growth with delightful tools while you stay in control.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 grid place-content-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-3 gap-4">
                {["Vendors", "Products", "Orders"].map((kpi, i) => (
                  <div key={kpi} className="rounded-lg border border-slate-200 p-4">
                    <p className="text-sm text-slate-600">{kpi}</p>
                    <p className="text-2xl font-semibold">{[1248, 58230, 9032][i].toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Unified operations, simplified</h4>
              <p className="mt-2 text-sm text-slate-600">
                Manage everything from vendor approvals and listings to fulfillment and payouts with a clean, modern interface.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Role-based access and granular permissions</li>
                <li>Commission rules per vendor, category, or product</li>
                <li>Automated invoicing and split payments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
