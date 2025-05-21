import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Integrate with your existing tools",
      description:
        "We build custom integrations with your ATS and hiring tools to reduce workload on your recruitment team.",
    },
    {
      id: "02",
      title: "Engage employees with gamification",
      description:
        "Our platform automatically engages employees with a gamification model designed to maximize participation.",
    },
    {
      id: "03",
      title: "Generate quality referrals",
      description:
        "Increased employee participation leads to more quality referrals, improving your hiring success rate.",
    },
    {
      id: "04",
      title: "Track and optimize performance",
      description:
        "Gain complete visibility into your referral program with actionable insights and dedicated support.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How ReferScout Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our dedicated Customer Success team partners with your recruiters every step of the way to ensure you get
            the most out of our solution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="relative rounded-lg bg-gray-50 p-8">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.id} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=500&width=500&query=employee%20referral%20process%20workflow"
              alt="How ReferScout Works"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 h-64 w-64 rounded-full bg-cyan-100 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
