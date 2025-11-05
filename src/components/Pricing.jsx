import React from 'react';
import { Check, DollarSign } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'forever',
    badge: 'Free',
    features: [
      'Up to 50 vendors',
      '1,000 products',
      'Standard analytics',
      'Email support',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '149',
    period: '/month',
    badge: 'Popular',
    features: [
      'Unlimited vendors',
      'Unlimited products',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Upgrade now',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    badge: 'Let’s talk',
    features: [
      'Dedicated cluster & SSO',
      'Custom workflows',
      'Premium support',
      'Compliance & SLAs',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <DollarSign size={14} />
            Simple, transparent pricing
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Scale as you grow</h2>
          <p className="mt-2 text-slate-600">Flexible plans for modern marketplaces of any size.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                'relative rounded-2xl border p-6 sm:p-8 bg-white ' +
                (plan.highlight
                  ? 'border-indigo-600 shadow-xl shadow-indigo-600/10'
                  : 'border-slate-200 shadow-sm')
              }
            >
              {plan.badge && (
                <span className={
                  'absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm ' +
                  (plan.highlight
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-slate-700 border-slate-200')
                }>
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-slate-500">{plan.period || ''}</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className={plan.highlight ? 'text-indigo-600' : 'text-slate-600'} />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={
                  'mt-8 w-full rounded-md px-4 py-2 text-sm font-medium ' +
                  (plan.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'bg-slate-900 text-white hover:bg-slate-800')
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          All plans include secure checkout, vendor payouts, and unlimited admin users.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
