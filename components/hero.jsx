import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Scale Your <span className="text-blue-600">Employee Referral Program</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              All-in-one solution to boost employee participation, generate quality candidates, and maximize your
              referral hires.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="rounded-md bg-blue-600 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Request Demo
              </a>
              <a
                href="#how-it-works"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-center font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Image
                  src="/professional-headshot.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                />
                <Image
                  src="/professional-woman-headshot.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                />
                <Image
                  src="/professional-man-headshot.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                />
              </div>
              <p className="text-sm text-gray-500">
                Trusted by <span className="font-medium text-gray-900">500+</span> companies worldwide
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hr-referral-dashboard.png"
              alt="ReferScout Dashboard"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-blue-100 blur-3xl"></div>
            <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-cyan-100 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
