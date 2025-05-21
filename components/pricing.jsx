import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Launch",
      description: "Perfect for companies just starting with employee referrals",
      price: "Custom",
      features: [
        "Up to 500 employees",
        "Employee Console",
        "Customizable Referral Links",
        "Employee Leaderboard",
        "Bonus Payment Tracking",
        "ATS / HRIS / ERP Integration",
        "Reward Customization",
      ],
      cta: "Contact Sales",
      mostPopular: false,
    },
    {
      name: "Growth",
      description: "Ideal for mid-sized companies looking to scale their referral program",
      price: "Custom",
      features: [
        "500-1,500 employees",
        "Employee Console",
        "Customizable Referral Links",
        "Employee Leaderboard",
        "Bonus Payment Tracking",
        "ATS / HRIS / ERP Integration",
        "Reward Customization",
      ],
      cta: "Contact Sales",
      mostPopular: true,
    },
    {
      name: "Scale",
      description: "For larger organizations with advanced referral needs",
      price: "Custom",
      features: [
        "1,500-5,000 employees",
        "Employee Console",
        "Customizable Referral Links",
        "Employee Leaderboard",
        "Bonus Payment Tracking",
        "ATS / HRIS / ERP Integration",
        "Reward Customization",
        "Activity Based Gamification",
        "Custom Branding",
      ],
      cta: "Contact Sales",
      mostPopular: false,
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large enterprises",
      price: "Custom",
      features: [
        "5,000+ employees",
        "Employee Console",
        "Customizable Referral Links",
        "Employee Leaderboard",
        "Bonus Payment Tracking",
        "ATS / HRIS / ERP Integration",
        "Reward Customization",
        "Advanced Gamification",
        "Custom Branding",
        "Reward Store",
        "External Referrals (Community Program)",
      ],
      cta: "Contact Sales",
      mostPopular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your company size and referral program needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg ${
                plan.mostPopular ? "border-2 border-blue-600 shadow-xl" : "border border-gray-200 shadow"
              } bg-white p-6`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 px-3 py-1 text-center text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500">Tailored to your needs</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="#demo"
                  className={`block w-full rounded-md ${
                    plan.mostPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 ring-1 ring-blue-600 hover:bg-gray-50"
                  } px-4 py-2 text-center text-sm font-medium`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
