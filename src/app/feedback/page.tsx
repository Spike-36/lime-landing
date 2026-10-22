// Feedback from YumWords Thailand testers. Their personal link
// (/feedback#t=…) files it with them; otherwise they give their email
// address. Sent to the YumWords Editor (see src/app/api/feedback). Not for
// search engines: it is only for testers.
import Link from "next/link"
import Footer from "@/components/Footer"
import FeedbackForm from "./FeedbackForm"

export const metadata = {
  title: "Your feedback · YumWords Thailand",
  description: "Tell us what you think of the YumWords Thailand test version.",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
}

export default function FeedbackPage() {
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
        <section className="mx-auto max-w-2xl pb-8 pt-6 md:pt-12">
          <p className="font-medium text-orange-700">Testing phase</p>
          <h1 className="mt-2 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[48px]">Your feedback</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4036]">
            Thank you for testing YumWords Thailand. Tell us what works, what doesn’t, and anything you find confusing. A couple of
            minutes is plenty, and you can send feedback as often as you like.
          </p>
        </section>

        <section aria-label="Feedback form" className="mx-auto max-w-2xl rounded-[32px] bg-[#F0EDE6] p-6 md:p-10">
          <FeedbackForm />
        </section>

        <p className="mx-auto mt-8 max-w-2xl text-sm text-[#6B5E4E]">
          Your feedback is stored with your tester registration and used only to improve YumWords. See our{" "}
          <Link href="/privacy#testing" className="underline">privacy policy</Link>. Questions? Email support@yumwords.com.
        </p>
      </main>

      <Footer />
    </div>
  )
}
