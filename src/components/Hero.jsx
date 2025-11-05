import React from 'react';
import { Rocket, Store } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -right-32 h-72 w-72 rounded-full bg-fuchsia-100 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Store size={14} />
              Multivendor commerce SaaS
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Launch and scale your multi‑vendor marketplace in days, not months
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              MarketPilot gives you everything you need to onboard vendors, manage catalogs, process orders, and get paid — all in one streamlined platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500">
                <Rocket size={18} /> Start free trial
              </button>
              <button className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50">
                Book a demo
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">No credit card required • 14‑day free trial</p>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full p-4 grid grid-cols-12 gap-3">
                <div className="col-span-3 space-y-2">
                  <div className="h-8 w-24 rounded bg-slate-100" />
                  <div className="h-6 w-28 rounded bg-slate-100" />
                  <div className="h-6 w-20 rounded bg-slate-100" />
                  <div className="h-6 w-24 rounded bg-slate-100" />
                  <div className="h-6 w-16 rounded bg-slate-100" />
                </div>
                <div className="col-span-9">
                  <div className="grid grid-cols-2 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="rounded-lg border border-slate-200 p-3">
                        <div className="h-32 rounded bg-gradient-to-br from-indigo-100 to-fuchsia-100" />
                        <div className="mt-3 h-4 w-3/5 rounded bg-slate-100" />
                        <div className="mt-2 h-3 w-2/5 rounded bg-slate-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl shadow p-4">
              <p className="text-sm font-medium">Vendors active</p>
              <p className="text-2xl font-semibold">1,248</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white border border-slate-200 rounded-xl shadow p-4">
              <p className="text-sm font-medium">Monthly GMV</p>
              <p className="text-2xl font-semibold">$482,900</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
