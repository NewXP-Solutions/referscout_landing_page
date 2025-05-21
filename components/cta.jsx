export default function Cta() {
  return (
    <section className="bg-blue-600 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your employee referral program?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join hundreds of companies that have boosted their referral hires with ReferScout.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="rounded-md bg-white px-6 py-3 text-center font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Request Demo
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
