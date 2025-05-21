import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "ReferScout has transformed our employee referral program. We've seen a 40% increase in quality candidates and our time-to-hire has decreased significantly.",
      author: {
        name: "Sarah Johnson",
        title: "Head of Recruitment, TechCorp",
        image: "/professional-woman-headshot.png",
      },
    },
    {
      content:
        "The gamification features have dramatically increased employee participation. Our referral program went from being forgotten to one of our top sources of quality hires.",
      author: {
        name: "Michael Chen",
        title: "VP of HR, GrowthInc",
        image: "/professional-man-headshot.png",
      },
    },
    {
      content:
        "The customer success team at ReferScout has been exceptional. They helped us customize the platform to our specific needs and are always available when we need support.",
      author: {
        name: "Emily Rodriguez",
        title: "Talent Acquisition Manager, InnovateNow",
        image: "/professional-woman-headshot.png",
      },
    },
  ]

  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by leading companies</h2>
          <p className="mt-4 text-lg text-gray-600">See what our customers have to say about ReferScout</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-lg text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center">
                <Image
                  src={testimonial.author.image || "/placeholder.svg"}
                  alt={testimonial.author.name}
                  width={60}
                  height={60}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[...Array(6)].map((_, i) => (
            <Image
              key={i}
              src="/placeholder.svg?height=40&width=120&query=company%20logo%20grayscale"
              alt="Company logo"
              width={120}
              height={40}
              className="h-8 w-auto grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
