// YumWords Thailand testing programme: what it involves, and registration.
// Registrations go to the YumWords Editor (see src/app/api/register).
import Link from "next/link"
import Footer from "@/components/Footer"
import { OFFER } from "@/lib/registration"
import RegisterForm from "./RegisterForm"

export const metadata = {
  title: "Help test YumWords Thailand",
  description: "Register to test YumWords Thailand on iPhone or Android before it is released.",
  alternates: { canonical: "/test" },
  referrer: "no-referrer",
}

const steps = [
  { title: "Register", body: "Fill in the short form below." },
  {
    title: "We arrange your access",
    body: "We add you to Apple TestFlight (iPhone) or Google Play testing (Android) by hand, using your email address.",
  },
  { title: "Install the app", body: "We send you installation instructions by email or WhatsApp, as you prefer." },
  { title: "Use it and tell us", body: "Use YumWords Thailand when you eat out, shop or cook, and let us know what you think." },
]

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#1F1B16]">
      <header className="mx-auto flex max-w-6xl items-center px-5 py-4 sm:px-8 sm:py-5">
        <Link href="/thailand" className="flex items-center gap-3">
          <img src="/media/thailand/icon.png" alt="" width={40} height={40} className="h-10 w-10 rounded-[11px] shadow-sm" />
          <span className="text-lg font-semibold leading-none tracking-tight">
            YumWords <span className="font-normal text-[#8A7B66]">Thailand</span>
          </span>
        </Link>
      </header>

      <main className="px-5 pb-16 sm:px-8">
        <section className="mx-auto max-w-2xl pb-10 pt-6 md:pt-12">
          <p className="font-medium text-orange-700">Testing phase</p>
          <h1 className="mt-2 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[48px]">
            Help test YumWords Thailand
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4036] md:text-xl">
            YumWords Thailand is currently being tested through Apple’s TestFlight and Google Play’s official app testing
            programmes, ahead of its public release.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4036] md:text-xl">
            Register below and we’ll send you instructions for installing the test version on your phone.
          </p>
          <p className="mt-6 rounded-[20px] bg-[#F8EDD3] p-5 text-lg font-medium leading-relaxed">{OFFER}</p>
        </section>

        <section aria-labelledby="how" className="mx-auto max-w-2xl pb-12">
          <h2 id="how" className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 font-semibold text-white">{i + 1}</span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-[#4A4036]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="register" className="mx-auto max-w-2xl rounded-[32px] bg-[#F0EDE6] p-6 md:p-10">
          <h2 id="register" className="text-2xl font-semibold">Register to test</h2>
          <p className="mb-6 mt-2 text-[#4A4036]">
            The test version is installed through Apple’s TestFlight or Google Play’s official app testing programme. We
            add each tester ourselves, then send you installation instructions.
          </p>
          <RegisterForm />
        </section>

        <p className="mx-auto mt-8 max-w-2xl text-sm text-[#6B5E4E]">
          Questions? <Link href="/contact" className="underline">Contact us</Link> or email support@yumwords.com.
        </p>
      </main>

      <Footer />
    </div>
  )
}
