import { CheckCircle, Users, Award, BarChart3, Zap, Briefcase } from "lucide-react"

export default function Features() {
  const features = [
    {
      name: "Employee Console",
      description: "Intuitive interface for employees to track their referrals and payouts in real-time.",
      icon: Users,
    },
    {
      name: "Customizable Referral Links",
      description: "Personalized links for each employee to share job openings with their network.",
      icon: Zap,
    },
    {
      name: "Employee Leaderboard",
      description: "Gamified experience that encourages healthy competition among employees.",
      icon: Award,
    },
    {
      name: "Bonus Payment Tracking",
      description: "Automated tracking of referral bonuses and payment status for complete transparency.",
      icon: CheckCircle,
    },
    {
      name: "ATS / HRIS / ERP Integration",
      description: "Seamless integration with your existing HR tools to reduce manual workload.",
      icon: Briefcase,
    },
    {
      name: "Advanced Analytics",
      description: "Comprehensive insights into your referral program performance with actionable data.",
      icon: BarChart3,
    },
  ]

  return (
    <section id="features" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features that deliver results</h2>
          <p className="mt-4 text-lg text-gray-600">
            ReferScout is more than just nice charts and clear reports. Our platform provides complete visibility of
            your referral program's performance.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
