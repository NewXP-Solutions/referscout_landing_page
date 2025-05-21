import "./globals.css"

export const metadata = {
  title: "ReferScout - Scale Your Employee Referral Program",
  description:
    "All-in-one solution to scale your Employee Referral Program by boosting employee participation, generating quality candidates and maximizing your referral hires.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  )
}
